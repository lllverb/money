Rails.application.routes.draw do
  root 'months#show'

  resources :members, only: [] do
    resources :categories, only: [] do
      resources :details, only: [] do
        resources :howmuches, only: [:create]
      end
    end
  end
  
  resources :years, only: [:show] do
    resources :months, only: [:show] do
      resources :categories2, only: [:index] do
        resources :details2, only: [:index]
      end
      resources :days, only: [:show]
      resources :members, only: [:index, :show] do
        resources :categories, only: [:show] do
          resources :details, only: [:show] do
            resources :howmuches, only: [:create]
          end
        end
      end
    end
  end
end
