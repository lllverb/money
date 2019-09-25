Rails.application.routes.draw do
  root 'members#index'
  resources :members, only: [:index, :show] do
    resources :categories, only: [:index, :show]
  end
end
