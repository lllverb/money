class MonthsController < ApplicationController
  def show
    gon.howmuch = Category.all
    gon.howmuches = Howmuch.where(user_id: current_user.id).where(when: Time.local(Date.today.year, Date.today.month).all_month)

    if params[:year_id]
      @howmuches = Howmuch.where(user_id: current_user.id).where(when: Time.local(params[:year_id], params[:id]).all_month)
      @theyear = params[:year_id]
      @themonth = params[:id]
    else 
      @howmuches = Howmuch.where(user_id: current_user.id).where(when: Time.local(Date.today.year, Date.today.month).all_month)
      @theyear = Date.today.year
      @themonth = Date.today.month
    end
    respond_to do |format|
      format.html
      format.json
    end
  end
  
end
