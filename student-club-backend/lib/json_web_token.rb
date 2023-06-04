class JsonWebToken
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s
  def self.encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  # In self.decode function we decoded the token given by the user and get the
  # first value then assign it to a decoded variable, the first value contains a
  # payload that we had already encoded before and the second value contain
  # information about the algorithm that we use for encoding and decoding token.
  def self.decode(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    HashWithIndifferentAccess.new decoded
  end
end
