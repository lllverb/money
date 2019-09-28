class Details2Controller < ApplicationController
  def index
    gon.howmuch   = Member.all
    gon.howmuches  = Howmuch.all
  end
end
