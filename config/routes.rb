Rails.application.routes.draw do

  namespace :api do
    devise_for :admin, controllers: { sessions: 'api/admin/sessions' }, only: :session

    resources :articles, only: [:index, :show, :create, :update]
  end

  get '*path', to: 'root#index'
end
