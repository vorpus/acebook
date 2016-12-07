class Api::PostsController < ApplicationController
  def index
    @posts = Post.order(created_at: :desc).includes(:author)
    render :index
  end

  def create
    post = current_user.posts.new(post_params)

    if post.save
      render json: post
    else
      render json: post.errors.full_messages, status: 422
    end
  end

  def show
    post = Post.find(params[:id])
    if post
      render json: post
    else
      render json: ["post not found"], status: 404
    end
  end

  def update
    post = Post.find(params[:id])

    if post.update(post_params)
      render json: post
    else
      render json: post.errors.full_messages, status: 422
    end
  end

  def delete
    post = Post.find(params[:id])

    if post.destroy
      render json: ['delete successful']
    else
      render json: post.errors.full_messages, status: 422
    end
  end

  private
  def post_params
    params.require(:post).permit(:body)
  end
end
