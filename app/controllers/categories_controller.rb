class CategoriesController < ApplicationController
  def show
    @member = Member.where(id: params[:member_id])
    @details = Detail.all
    gon.howmuch   = Detail.all
    gon.howmuches = Howmuch.where(user_id: current_user.id).where(when: Time.local(params[:year_id], params[:month_id]).all_month).where(member_id: params[:member_id]).where(category_id: params[:id])
    
    @howmuches = Howmuch.where(user_id: current_user.id).where(when: Time.local(params[:year_id], params[:month_id]).all_month).where(member_id: params[:member_id]).where(category_id: params[:id])
    @theyear = params[:year_id]
    @themonth = params[:month_id]
    respond_to do |format|
      format.html
      format.json
    end
  end
end
