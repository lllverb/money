class MembersController < ApplicationController

  def index
    @members = Member.all
  end

  def show
    # binding.pry
    @categories = Category.all
  end
end
