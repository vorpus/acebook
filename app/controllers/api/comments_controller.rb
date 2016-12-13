class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where("post_id = ?", params[:post_id])
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author = current_user
    @comment.post = Post.find(params[:post_id])

    if @comment.save
      render :show
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render json: {}
    else
      render json: @comment.errors
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
