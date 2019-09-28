class CategoriesController < ApplicationController
  def show
    @details = Detail.where(category_id: params[:id])
    gon.howmuch   = Detail.where(category_id: params[:id])
    gon.howmuches  = Howmuch.where(member_id: params[:member_id]).where(category_id: params[:id])
  end

  def category
  end
end
