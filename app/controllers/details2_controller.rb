class Details2Controller < ApplicationController
  def index
    @category = Category.where(id: params[:categories2_id])
    gon.howmuch   = Member.all
    gon.howmuches = Howmuch.where(user_id: current_user.id).where(when: Time.local(params[:year_id], params[:month_id]).all_month).where(category_id: params[:categories2_id])
    @howmuches = Howmuch.where(user_id: current_user.id).where(when: Time.local(params[:year_id], params[:month_id]).all_month).where(category_id: params[:categories2_id])
    @theyear = params[:year_id]
    @themonth = params[:month_id]
    respond_to do |format|
      format.html
      format.json
    end
  end
  def show
    @category = Category.where(id: params[:categories2_id])
    gon.howmuch   = Member.all
    gon.howmuches = Howmuch.where(user_id: current_user.id).where(when: Time.local(params[:year_id], params[:month_id]).all_month).where(category_id: params[:categories2_id])
    @howmuches = Howmuch.where(user_id: current_user.id).where(when: Time.local(params[:year_id], params[:month_id]).all_month).where(category_id: params[:categories2_id])
    @theyear = params[:year_id]
    @themonth = params[:month_id]
    respond_to do |format|
      format.html
      format.json
    end
  end
end
