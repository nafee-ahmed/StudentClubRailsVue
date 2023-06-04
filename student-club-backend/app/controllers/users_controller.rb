require 'json_web_token'

class UsersController < ApplicationController
  before_action :authorize_request, except: :create
  def create
    @user = User.new(user_params)
    if @user.save
      token = JsonWebToken.encode(user_id: @user.id)
      time = Time.now + 24.hours.to_i
      render json: { token: token, exp: time.strftime('%m-%d-%Y %H:%M'), msg: @user }, status: :created
    else
      render json: { msg: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def test
    render json: { msg: @current_user }
  end

  private

  def user_params
    params.permit(:email, :password, :password_confirmation, :name)
  end
end
