Rails.application.routes.draw do

  root to: 'root#index'

  devise_for :admin, path: 'api/admin', controllers: { sessions: 'api/admin/sessions' }, only: :session

  namespace :api do
    resources :articles, only: [:index, :show, :create, :update]

    get 'current_admin', :to => 'admin/admin#get_current_admin'
  end

  get '*path', to: 'root#index'
end
