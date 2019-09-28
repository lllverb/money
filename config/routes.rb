Rails.application.routes.draw do
  root 'members#index'
  resources :categories2, only: [:index] do
    resources :details2, only: [:index]
  end
  resources :years, only: [:show] do
    resources :months, only: [:show] do
      resources :days, only: [:show]
    end
  end
  resources :members, only: [:index, :show] do
    resources :categories, only: [:show] do
      resources :details, only: [:show] do
        resources :howmuches, only: [:create]
      end
    end
  end
end
