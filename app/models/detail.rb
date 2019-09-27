class Detail < ApplicationRecord
  belongs_to :category
  has_many   :howmuches
end
