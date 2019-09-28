class DaysController < ApplicationController
  def show
    gon.howmuch = Detail.all
    gon.howmuches = Howmuch.where(when: Time.local(params[:year_id], params[:month_id], params[:id]).all_day)
  end
end
