Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :events
    resource :session, only: [:create, :destroy]
    resources :topics, only: :index
    resources :event_bookmarks
  end
end
