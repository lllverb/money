class HowmuchesController < ApplicationController 
  def create
    @howmuch = Howmuch.new(howmuch_params)
    if @howmuch.save
      redirect_to member_category_detail_path(id: params[:detail_id])
    else
      # render
    end
  end


  private
  def howmuch_params
    params.require(:howmuch).permit(:name, :money, :where).merge(member_id: params[:member_id], category_id: params[:category_id], detail_id: params[:detail_id])
  end
end
