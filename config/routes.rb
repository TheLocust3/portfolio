Rails.application.routes.draw do
  get '*path', to: 'root#index'

  namespace :api do
    resources :articles
  end
end
