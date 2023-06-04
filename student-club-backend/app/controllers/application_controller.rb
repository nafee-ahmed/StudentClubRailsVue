class ApplicationController < ActionController::API
  def not_found
    render json: { error: 'not_found' }
  end

  # authorize_request function has responsibility for authorizing user requests.
  # first, we need to get a token in the header with ‘Authorization’ as a key.
  # with this token now we can decode and get the payload value.
  def authorize_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    #  try catch block
    begin
      @decoded = JsonWebToken.decode(header)
      @current_user = User.find(@decoded[:user_id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { msg: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { msg: e.message }, status: :unauthorized
    end
  end
end
