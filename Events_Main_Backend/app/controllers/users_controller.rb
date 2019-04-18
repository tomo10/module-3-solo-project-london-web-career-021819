class UsersController < ApplicationController
    
      def index 
        @users = User.all
        render json: @users
      end 

      def show
        @user = User.find(params[:id])
        render json: @user
      end
    
    
      def new
        @user = User.new
      end
    
    
      def create
        user = User.new(user_params)
        if user.valid?
          user.save
          render json: user
        else
          flash[:errors] = ["Something went wrong, please try again"]
          #redirect_to signup_path
      end
    end
    
    private
    
      def user_params
        params.require(:user).permit(:name)
      end

end
