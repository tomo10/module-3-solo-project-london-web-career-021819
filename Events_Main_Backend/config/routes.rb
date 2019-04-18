Rails.application.routes.draw do
  # resources :user_events
  resources :events, only: [:show, :index, :create, :destroy]
  resources :users, only: [:show, :create, :index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


end
