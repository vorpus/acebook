class Api::FriendsController < ApplicationController
  def index
    if params.has_key?(:user_id)
      @friends = User.find(params[:user_id]).active_friends
    else
      render json: ["Invalid user!"], status: 404
    end
  end

  def show
    @friend = Friend.find(params[:id])
    render json: @friend
  end

  def create
    if params.has_key?(:user_id)
      if current_user
        @friendship = Friend.new(user1: current_user.id, user2: params[:user_id], status: "pending")
        if Friend.friend_status(current_user.id, params[:user_id])
          render json: ["Friendship already exists."], status: 404
        else
          if @friendship.save
            render json: @friendship
          else
            render json: @friendship.errors
          end
        end
      else
        render json: ["Not logged in!"], status: 403
      end
    else
      render json: ["Invalid user!"], status: 404
    end
  end

  def update
  end

  def delete
  end
end
