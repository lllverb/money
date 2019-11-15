class Category < ApplicationRecord
  has_many :details
  has_many :howmuches
end
