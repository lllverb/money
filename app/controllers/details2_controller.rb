class Details2Controller < ApplicationController
  def index
    gon.howmuch   = Member.all
    gon.howmuches  = Howmuch.where(category_id: params[:categories2_id])
  end
end
