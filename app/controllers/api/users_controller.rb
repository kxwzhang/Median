class Api::UsersController < ApplicationController
    before_action :require_logged_in, only: [:show, :create, :update]

    def show
        @user = User.find_by(id: params[:id])
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
