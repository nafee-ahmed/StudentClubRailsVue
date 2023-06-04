class User < ApplicationRecord
  has_secure_password
  validates :email,
            presence: true,
            format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i },
            uniqueness: { case_sensitive: false }
  validates :name, presence: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }
  validates :password_confirmation, presence: true
end
