class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(session_params[:email], session_params[:password])

    if @user
      log_in(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username/password"], status: 401
    end
  end

  def destroy
    if logged_in
      log_out
      render json: {}
    else
      render json: ["Invalid user"], status: 404
    end
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end
