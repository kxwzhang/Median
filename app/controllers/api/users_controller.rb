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

    # def followers
    #     @followers = User.find_by(id: params[:id]).followers
    #     # @followers = current_user.followers
    #     render '/api/users/follows'
    # end

    # def followees
    #     @followees = User.find_by(id: params[:id]).followees
    #     # @followees = current_user.followees
    #     render '/api/users/follows'
    # end

    # Future functionality to edit user info (need to also add update to routes file)
    # def update
    #     @user = User.find_by(id: params[:id])
    #     if @user.update(user_params)
    #         render :show
    #     else
    #         render json: @user.errors.full_messages, status: 422
    #     end
    # end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
