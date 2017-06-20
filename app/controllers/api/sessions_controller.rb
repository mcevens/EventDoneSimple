class Api::SessionsController < ApplicationController
  def create

    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username or password"], status: 422
    end
  end

  def destroy
    render json: {}
  end

end
