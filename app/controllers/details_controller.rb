class DetailsController < ApplicationController
  before_action :set_member, :set_category, :set_detail


  def show
    @howmuch   = Howmuch.new
    @howmuches = Howmuch.where(member_id: params[:member_id]).where(detail_id: params[:id])
  end

  
  private
  def set_member
    @member = Member.find(params[:member_id])
  end

  def set_category
    @category = Category.find(params[:category_id])
  end

  def set_detail
    @detail = Detail.find(params[:id])
  end
end
