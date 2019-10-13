class ApplicationController < ActionController::Base
  before_action :set_toform
  def set_toform
    @members = Member.all
    @categories = Category.all
    @details = Detail.all
  end
end
