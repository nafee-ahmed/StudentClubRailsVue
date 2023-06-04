Rails.application.routes.draw do
  post '/auth/login', to: 'auth#login'
  get '/users/test', to: 'users#test'
  resources :users
end
