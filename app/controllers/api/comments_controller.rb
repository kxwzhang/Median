class Api::CommentsController < ApplicationController
    # before_action :require_logged_in, only: [:show, :create, :destroy]

    def show
        
    end

    def create

    end

    def destroy

    end

    private
    def comment_params
        params.require(:comment).permit(:comment, :story_id, :parent_comment_id)
    end
end
