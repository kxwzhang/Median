class Api::SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login!(@user)
            render '/api/users/show'
        else
            render json: ['Invalid username or password'], status: 404
        end


    end

    def destroy
        if logged_in?
            logout!
            render json: {}
        else
            render json: ['Already logged out'], status: 404
        end
    end
end
