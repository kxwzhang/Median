class Api::CommentsController < ApplicationController
    # before_action :require_logged_in, only: [:show, :create, :destroy]

    def show
        @comment = Comment.find_by(id: params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.commenter_id = current_user.id
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = current_user.comments.find_by(id: params[:id])
        @comment.destroy
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :story_id, :parent_comment_id)
    end
end
