class Api::SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login!(@user)
            render '/api/users/show'
        else
            render json: ['Invalid username or password']
        end


    end

    def destroy
        if logged_in?
            logout!
        else
            render json: ['Already logged out']
        end
    end
end
