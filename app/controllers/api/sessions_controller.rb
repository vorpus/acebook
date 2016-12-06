class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(session_params[:email], session_params[:password])

    if @user
      log_in(@user)
      render 'api/users/show'
    else
      render json: ["invalid login"], status: 401
    end
  end

  def destroy
    if logged_in
      log_out
      render json: {}
    else
      render json: ["not logged in"], status: 404
    end
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end
