class DetailsController < ApplicationController

  def show
    @howmuch   = Howmuch.new
    @howmuches = Howmuch.all
    # binding.pry
    if params[:category_id] 
      gon.howmuch   = Howmuch.where(member_id: params[:member_id]).where(detail_id: params[:category_id])
    end
  end

  
end
