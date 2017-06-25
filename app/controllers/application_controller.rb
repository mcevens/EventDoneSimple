class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  private

  def anonimous
    # cloud_name = ENV['CLOUD_NAME']
    # upload_preset = ENV['UPLOAD_PRESET']
    # UPLOAD_PRESET = Figaro.env.UPLOAD_PRESET
    # RESTART SERVER EVERYTIME YOU ADD APPLICATION KEY
    # FIGARO heroku:set -e production
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end

end
