class Api::UsersController < ApplicationController
    before_action :require_logged_in, only: [:show, :update]

    def show
        @user = User.includes(:stories).find_by(id: params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def follow
        @user = current_user
        @followee = User.find_by(id: params[:id])
        @followee.subscribers << current_user if @followee
    end

    def unfollow
        @user = current_user
        @followee = User.find_by(id: params[:id])
        @followee.subscribers.delete(current_user) if @followee
    end

    def subscriptions
        @user = User.find_by(id: params[:id])
        @subs = @user.subscriptions
        render "api/users/follows"
    end

    def subscribers
        @user = User.find_by(id: params[:id])
        @subs = @user.subscribers
        render "api/users/follows"
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
