class Api::StoriesController < ApplicationController
    before_action :require_logged_in, only: [:index, :show, :create, :update, :destroy]

    def index
        @stories = Story.includes(:author, "photo_attachment": :blob).all
        render :index
    end

    def show
        @story = Story.includes(:author, "photo_attachment": :blob).find_by(id: params[:id])
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

    # def likes
    #     # @user = User.find(params[:id])
    #     # @likes = @user.likes
    #     # @stories = @likes.map { |sub| sub.story }
    #     @story = Story.find_by(id: params[:id])
    #     @likes = @story.likes
    #     render "api/stories/likes"
    # end

    # def like
    #     # @like = current_user.likes.new
    #     # @like.story_id = params[:id]
    #     # @liked = Story.find(params[:id])
    #     # p @like
    #     # @liked.likes << @like if @liked
    #     @like = Like.new(liker_id: current_user.id, story_id: params[:id])
    #     if @like.save
    #         p @like
    #     end
    # end

    # def unlike
    #     # @story = Story.find_by(id: params[:id])
    #     # @likes = @story.likes

    #     @like = Like.find_by(liker_id: current_user.id)
    #     @like.story_id = params[:id]
    #     @liked = Story.find_by(id: params[:id])
    #     @liked.likes.delete(@like) if (@liked && @like)
    # end

    private
    def story_params
        params.require(:story).permit(:title, :subtitle, :body, :photo)
    end
end
