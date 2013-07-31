#coding: utf-8
# UsersController
# Author:: Kazuko Ohmura
# Date:: 2013.07.31

#ユーザ情報更新
class UsersController < ApplicationController
    before_filter :authorize, :except => :login #ログインしていない場合はログイン画面に移動
    
    def index
      #@users = User.new
    end
    def edit
      @user = current_user
    end
  
    # PATCH/PUT /admin/users/1
    # PATCH/PUT /admin/users/1.json
    def update
      @user = current_user
      respond_to do |format|
        if @user.update(user_params)
          #format.html { redirect_to @user, notice: 'User was successfully updated.' }
          @successmsg = {'msg'=>'success'}
          format.html { render action: 'edit' }
          format.json { render json: @successmsg }
        else
          format.html { render action: 'edit' }
          format.json { render json: @user.errors, status: :unprocessable_entity }
        end
      end
    end
    
    private
    # Use callbacks to share common setup or constraints between actions.

      # Never trust parameters from the scary internet, only allow the white list through.
      def user_params
        #params.require(:user).permit(:name, :password_digest, :title, :mail, :group_id, :admin)
        params.require(:user).permit(:name, :password,:password_confirmation, :title, :mail, :group_id, :admin)
        #params.require(:user).permit( :password,:password_confirmation, :title, :mail)
      end
end
