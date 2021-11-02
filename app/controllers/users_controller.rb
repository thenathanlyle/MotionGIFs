class UsersController < ApplicationController

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode({ id: @user.id })
      render json: {
        user: @user.attributes.except('password_digest'),
        token: @token
      }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :email, :image_url, :password)
    end
end
