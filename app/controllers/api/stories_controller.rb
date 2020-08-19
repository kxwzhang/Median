class Api::StoriesController < ApplicationController
    before_action :require_logged_in, only: [:index, :show, :create, :update, :destroy]

    def index
        @stories = Story.all
        
    end

    def show

    end

    def create

    end
    
    def update

    end

    def destroy

    end

    private
    def story_params
        params.require(:story).permit(:title, :subtitle, :body)
    end
end
