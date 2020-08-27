Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create] do 
      member do 
        get :followers, :following
      end
      resource :relationship, only: [:create, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :stories, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:index, :show, :create, :destroy]
  end
end
