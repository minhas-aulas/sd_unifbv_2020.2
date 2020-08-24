Rails.application.routes.draw do
  resources :enquetes, only: [:create, :index, :show]
  get '/', to: 'home#index'
  root to: 'home#index'
end
