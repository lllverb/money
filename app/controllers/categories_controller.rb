class CategoriesController < ApplicationController

  def show
    @details = Detail.where(category_id: params[:id])
    if params[:member_id] 
      gon.howmuch   = Detail.where(category_id: params[:id])
      gon.howmuches  = Howmuch.where(member_id: params[:member_id]).where(category_id: params[:id])
      # binding.pry
      end
  end

end
