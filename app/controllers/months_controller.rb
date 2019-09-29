class MonthsController < ApplicationController
  def show
    gon.howmuch = Detail.all
    @howmuches = Howmuch.where(when: Time.local(params['year_id'], params['id']).all_month)
    gon.watch.howmuches = @howmuches
    # binding.pry
    respond_to do |format|
      format.html
      format.json
    end
  end
end
