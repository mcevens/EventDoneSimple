# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token

  validates :password_digest, presence: true

  validates(
    :password,
    length: { minimum: 6, allow_nil: true }
  )
  validates :session_token, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def self.find_by_email_clean(email)
    user = User.new
    findUser  = User.find_by(email: email)

    if findUser
      return findUser
    else
      user.id = 0
      user.email = ''
      return user
    end
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
