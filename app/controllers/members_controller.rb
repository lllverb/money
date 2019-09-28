class MembersController < ApplicationController

  def index
    @members = Member.all
    gon.howmuch = Member.all
    gon.howmuches = Howmuch.all
    @months = Howmuch.where(when: Time.local(2019, params[:id]).all_month)
  end
  
  def show
    @categories = Category.all
    gon.howmuch = Category.all
    gon.howmuches = Howmuch.where(member_id: params[:id])
  end


end
