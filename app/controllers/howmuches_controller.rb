class HowmuchesController < ApplicationController 
  def create
    @howmuch = Howmuch.new(howmuch_params)
    if @howmuch.save
      redirect_to year_month_member_category_detail_path(year_id: params[:year_id], month_id: params[:month_id], id: params[:detail_id])
    else
    end
  end

  def destroy
    howmuch = Howmuch.find(params[:id])
    if howmuch.destroy
      redirect_to year_month_member_category_detail_path(year_id: params[:year_id], month_id: params[:month_id], id: params[:detail_id])
    else
    end
  end


  private
  def howmuch_params
    params.require(:howmuch).permit(:name, :money, :where, :when, :user_id).merge(member_id: params[:member_id], category_id: params[:category_id], detail_id: params[:detail_id])
  end
end
