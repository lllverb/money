class Categories2Controller < ApplicationController
  def index
    gon.howmuch   = Category.all
    gon.howmuches  = Howmuch.all
  end
end
