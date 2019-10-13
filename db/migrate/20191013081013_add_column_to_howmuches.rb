class AddColumnToHowmuches < ActiveRecord::Migration[5.2]
  def change
    add_reference :howmuches, :user, foreign_key: true
  end
end
