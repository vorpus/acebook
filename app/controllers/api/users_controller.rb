class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors, status: 404
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: ["No user found"], status: 404
    end
  end

  def update
    @user = User.find(params[:id])
    if @user == current_user
      debugger
      if @user.update(user_params)
        render :show
      else
        render json: @user.errors, status: 400
      end
    else
      render json: ["No user found"], status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:firstname, :lastname,
                  :email, :password, :birthday, :gender,
                  :current_town, :home_town, :relationship,
                  :workplace, :school,
                  :profilepic)
  end
end
