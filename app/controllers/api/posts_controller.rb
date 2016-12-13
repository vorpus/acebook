class Api::PostsController < ApplicationController
  def index
    if params.has_key?(:user_id)
      # @posts = Post.where(author_id: params[:user_id])
      sleep 1
      @posts = Post.where("tagged_user = ? or (tagged_user IS NULL and author_id = ?)", params[:user_id], params[:user_id])
                    .where(:author_id => Friend.active_friendships(current_user))
      @posts.includes(:author, :tagged, {likes: [:user]}, {comments: [:author]})
    else
      sleep 2
      @posts = Post.order(created_at: :desc)
                    .where(:author_id => Friend.active_friendships(current_user))
                    .includes(:author, :tagged, {likes: [:user]}, {comments: [:author]})
    end
  end

  def create
    @post = current_user.posts.new(post_params)
    if params.has_key?(:user_id)
      unless current_user.id == params[:user_id].to_i
        @post.tagged_user = params[:user_id]
      end
    end

    if @post.save
      render :show
    else
      render json: @post.errors, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
    if @post
      render :show
    else
      render json: ["post not found"], status: 404
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    post = Post.find(params[:id])

    if post.destroy
      render json: ['delete successful']
    else
      render json: post.errors.full_messages, status: 422
    end
  end

  private
  def post_params
    params.require(:post).permit(:body, :image)
  end
end
