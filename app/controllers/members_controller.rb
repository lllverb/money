class MembersController < ApplicationController

  def index
    gon.howmuch = Member.all
    gon.howmuches = Howmuch.where(user_id: current_user.id).where(when: Time.local(params[:year_id], params[:month_id]).all_month)

    @howmuches = Howmuch.where(user_id: current_user.id).where(when: Time.local(params[:year_id], params[:month_id]).all_month)
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
    gon.howmuches = Howmuch.where(user_id: current_user.id).where(when: Time.local(params[:year_id], params[:month_id]).all_month).where(member_id: params[:id])

    @howmuches = Howmuch.where(user_id: current_user.id).where(when: Time.local(params[:year_id], params[:month_id]).all_month).where(member_id: params[:id])
    @theyear = params[:year_id]
    @themonth = params[:month_id]
    respond_to do |format|
      format.html
      format.json
    end
  end

  def new
    @member = Member.new
  end

  def create
    @member = Member.new(member_params)
    if @member.save
      redirect_to root_path, notice: '完了'
    else
      render :new
    end
  end

  private
  def member_params
    params.require(:member).permit(:name, :user_id)
  end
end
