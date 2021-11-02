class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments
  end

  # def index
  #   @post = Post.find(params[:post_id])
  #   @comments = Comment.where(post_id: @post.id)
  #   render json: @comments, include: :post, status: :ok
  # end

  # # GET /comments/1
  # def show
  #   render json: @comment
  # end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # # PATCH/PUT /comments/1
  def update
    if @payload[:id] == @comment.user_id && @comment.update(comment_params)
      render json: @comment
    elsif @payload[:id] != @comment.user_id
      render json: {
        error: @comment.errors, 
        status: :unprocessable_entity,
        message: 'User did not create this comment.'
      }
    else
      render json: {
        error: @comment.errors,
        status: :unprocessable_entity,
        message: 'Request body has unpermitted content.'
      }
    end
  end

  # # DELETE /comments/1
  def destroy
    if @payload[:id] == @comment.user_id
      @comment.destroy
      render json: { message: 'Comment has been destroyed.'}
    elsif @payload[:id] != @comment.user_id
      render json: {
        status: :unauthorized,
        message: 'User did not create this comment.'
      }
    else
      render json: @post.errors
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:opinion, :user_id, :post_id)
    end
end
