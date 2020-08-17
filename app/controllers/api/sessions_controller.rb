class Api::SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]

    def create

    end

    def destroy

    end
end
