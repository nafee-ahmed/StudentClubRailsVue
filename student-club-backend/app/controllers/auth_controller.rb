require 'json_web_token'

class AuthController < ApplicationController
  before_action :authorize_request, except: :login
  def login
    @user = User.where(email: params[:email]).first
    # & handles if @user is null
    if @user&.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @user.id)
      time = Time.now + 24.hours.to_i
      render json: { token: token, exp: time.strftime('%m-%d-%Y %H:%M'), msg: @user }, status: :ok
    else
      render json: { msg: 'Wrong email or password' }, status: :unauthorized
    end
  end

  private

  def login_params
    params.permit(:email, :password)
  end
end
