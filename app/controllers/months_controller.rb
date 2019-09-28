class MonthsController < ApplicationController
  def show
    gon.howmuch = Detail.all
    gon.howmuches = Howmuch.where(when: Time.local(params['year_id'], params['id']).all_month)
    @howmuches = Howmuch.where(when: Time.local(params['year_id'], params['id']).all_month)
  end
end
