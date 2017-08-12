Rails.application.routes.draw do
  devise_for :admins

  namespace :api do
    resources :articles, only: [:index, :show, :create, :update]
  end

  get '*path', to: 'root#index'
end
