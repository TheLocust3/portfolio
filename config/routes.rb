Rails.application.routes.draw do
  resources :articles

  namespace :api do
    resources :articles
  end
end
