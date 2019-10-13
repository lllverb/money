class ApplicationController < ActionController::Base
  before_action :set_toform
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?
  def set_toform
    @members = Member.where(user_id: current_user.id) if user_signed_in?
    @categories = Category.all
    @details = Detail.all
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
  end
end
