Rails.application.routes.draw do
  devise_for :users
  root 'months#show'  
  resources :members, only: [:new, :create]
  resources :years, only: [:show] do
    resources :months, only: [:show] do
      resources :categories2, only: [:index] do
        resources :details2, only: [:index]
      end
      resources :days, only: [:show]
      resources :members, only: [:index, :show] do
        resources :categories, only: [:show] do
          resources :details, only: [:show, :create] do
            resources :howmuches, only: [:create, :destroy]
          end
        end
      end
    end
  end
end
