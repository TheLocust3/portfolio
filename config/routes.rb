Rails.application.routes.draw do
  resources :articles
  get 'admin/articles/new' => 'articles#new'
  get 'admin/articles/:id/edit' => 'articles#edit'

  namespace :api do
    resources :articles
  end
end
