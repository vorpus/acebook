class Api::FriendsController < ApplicationController
  def index
    if params.has_key?(:user_id)
      render json: Friend.find_friendship(current_user.id, params[:user_id])
    else
      @friends = Friend.where("status = 'pending' AND user2 = ?", current_user.id)
      @friends.includes(:friender)
      render :index
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
    @friendship = Friend.find_by(id: params[:id])
    if @friendship
      if @friendship[:user2] == current_user.id
        if @friendship.update(status:"active")
          render json: @friendship
        else
          render json: @friendship.errors, status: 404
        end
      else
        render json: ["Waiting on other party action"], status: 403
      end
    else
      render json: ["Friendship not found"], status: 404
    end
  end

  def destroy
    @friendship = Friend.find_by(id: params[:id])
    if @friendship
      if @friendship.delete
        render json: {}
      else
        render json: @friendship.errors, status: 404
      end
    else
      render json: ["Friendship not found"], status: 404
    end

  end
end
