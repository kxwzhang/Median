class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    if @like.save
      render 'api/likes/likes'
    else
      render json: @like.errors.full_messages, status: 422
    end
       
  end

  def destroy
    @like = current_user.likes.find_by(id: params[:id])
    @like.destroy
  end

  private
  def like_params
    self.params.require(:like).permit(:liker_id, :story_id)
  end
end
