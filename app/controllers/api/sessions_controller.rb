class Api::SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]

    def create
        un = params[:username]
        pw = params[:password]
        @user = User.find_by_credentials(username: un, password: pw)
        if @user
            login!(@user)
            render :show
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
