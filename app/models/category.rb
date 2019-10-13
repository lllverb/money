class Category < ApplicationRecord
  has_many :details
  belongs_to :member
end
