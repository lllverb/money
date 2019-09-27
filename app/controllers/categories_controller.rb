class CategoriesController < ApplicationController

  def show
    @details = Detail.where(category_id: params[:id])
    if params[:member_id] 
      gon.howmuch   = Detail.all
      gon.howmuches  = Howmuch.where(member_id: params[:member_id]).where(category_id: params[:id])
      end
  end

end
