Rails.application.routes.draw do
  namespace :api do
    resources :articles
  end

  get '*path', to: 'root#index'
end
