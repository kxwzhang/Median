Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create] do 
      # member do 
      #   get :followers, :followees
      # end
      # resource :follow, only: [:create, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :stories, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:index, :show, :create, :destroy]
  end
  
  get 'api/users/:id/subscribers', to: 'api/users#subscribers', defaults: {format: :json}
  get 'api/users/:id/subscriptions', to: 'api/users#subscriptions', defaults: {format: :json}
  delete 'api/users/:id/follow', to: 'api/users#unfollow', defaults: {format: :json}
  post 'api/users/:id/follow', to: 'api/users#follow', defaults: {format: :json}
end
