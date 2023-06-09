Rails.application.routes.draw do
  post '/auth/login', to: 'auth#login'
  get '/users/test', to: 'users#test'
  get '/clubs/applied', to: 'clubs#applied_clubs'
  resources :users
  resources :clubs
end
