class Categories2Controller < ApplicationController
  def index
    gon.howmuch   = Category.all
    gon.howmuches  = Howmuch.where(user_id: current_user.id).all
  end
end
