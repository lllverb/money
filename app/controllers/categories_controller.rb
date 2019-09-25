class CategoriesController < ApplicationController

  def show
    gon.fashon = 10000
    gon.hair = 5000
    @details = Detail.where(category_id: params[:id])
  end
  
end
