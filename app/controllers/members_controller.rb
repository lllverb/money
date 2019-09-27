class MembersController < ApplicationController

  def index
    @members = Member.all
  end

  def show
    @categories = Category.all
    # gon.howmuches  = Howmuch.where(member_id: params[:id])
  end
end
