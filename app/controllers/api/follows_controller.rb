class Api::FollowsController < ApplicationController
    # before_action :require_logged_in! only: [:show, :create, :destroy]

    def show
        @follow = current_user.out_follows(followee_id: params[:user_id])
        render :show
    end

    def create
        @follow = current_user.out_follows.create!(followee_id: params[:user_id])
        render :show
    end

    def destroy
        @follow = current_user.out_follows.find_by(followee_id: params[:user_id])
        @follow.destroy!
    end
end
