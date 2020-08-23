class Api::StoriesController < ApplicationController
    before_action :require_logged_in, only: [:index, :show, :create, :update, :destroy]

    def index
        @stories = Story.all
        render :index
    end

    def show
        @story = Story.find_by(id: params[:id])
        render :show
    end

    def create
        @story = Story.new(story_params)
        @story.author_id = current_user.id
        if @story.save 
            render :show
        else
            render json: @story.errors.full_message, status: 422
        end
    end
    
    def update
        @story = current_user.stories.find_by(id: params[:id])
        unless @story
            render json: ['You can only edit your own stories!'], status: 422
            return
        end
        if @story.update(story_params)
            render :show
        else
            render json: @story.errors.full_message, status: 422
        end
    end

    def destroy
        @story = current_user.stories.find_by(id: params[:id])
        @story.destroy
    end

    private
    def story_params
        params.require(:story).permit(:title, :subtitle, :body, :photo)
    end
end
