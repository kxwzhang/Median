class Api::LikesController < ApplicationController
  def create
    @like = Like.new
    @like.liker_id = current_user.id
    @like.story_id = params[:id]
    if @like.save
      @story = @like.story
      render 'api/stories/index'
    else
      render json: @like.errors.full_messages, status: 422
    end
       
  end

  def destroy
    @like = Like.find_by(liker_id: current_user.id, story_id: params[:id])
    @story = @like.story
    @like.destroy
    render 'api/stories/index'
  end

  private
  def like_params
    self.params.require(:like).permit(:liker_id, :story_id)
  end
end
