Rails.application.routes.draw do
  root 'members#index'
  resources :members, only: [:index, :show] do
    resources :categories, only: [:show] do
      resources :details, only: [:show, :new, :create] do
        resources :howmuches, only: [:new, :create]
      end
    end
  end
end
