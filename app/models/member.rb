class Member < ApplicationRecord
  has_many :categories
  has_many :howmuches
end
