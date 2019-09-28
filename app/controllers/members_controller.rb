class MembersController < ApplicationController

  def index
    @members = Member.all
    gon.howmuch = Member.all
    gon.howmuches = Howmuch.all
    # gon.howmuches = Howmuch.where(when: Time.local(params[:year_id], params[:id]).all_month)
    
    respond_to do |format|
      format.html
      format.json
    end
    # binding.pry
  end
  
  def show
    @categories = Category.all
    gon.howmuch = Category.all
    gon.howmuches = Howmuch.where(member_id: params[:id])
  end


end
