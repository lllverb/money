class MembersController < ApplicationController

  def index
    gon.howmuch = Member.all
    gon.howmuches = Howmuch.where(when: Time.local(params[:year_id], params[:month_id]).all_month)

    @howmuches = Howmuch.where(when: Time.local(params[:year_id], params[:month_id]).all_month)
    @theyear = params[:year_id]
    @themonth = params[:month_id]
    respond_to do |format|
      format.html
      format.json
    end
  end
  
  def show
    @member = Member.where(id: params[:id])
    @categories = Category.all
    gon.howmuch = Category.all
    gon.howmuches = Howmuch.where(when: Time.local(params[:year_id], params[:month_id]).all_month).where(member_id: params[:id])

    @howmuches = Howmuch.where(when: Time.local(params[:year_id], params[:month_id]).all_month).where(member_id: params[:id])
    @theyear = params[:year_id]
    @themonth = params[:month_id]
    respond_to do |format|
      format.html
      format.json
    end
  end
end
