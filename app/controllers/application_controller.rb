class ApplicationController < ActionController::Base
  before_action :set_toform
  before_action :authenticate_user!
  def set_toform
    @members = Member.where(user_id: current_user.id) if user_signed_in?
    @categories = Category.all
    @details = Detail.all
  end
end
