Rails.application.routes.draw do
  post '/auth/login', to: 'auth#login'
  resources :users
  post '/users/test', to: 'users#test', method: 'POST'
end
