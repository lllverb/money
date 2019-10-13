class AddWhenToHowmuches < ActiveRecord::Migration[5.2]
  def change
    add_column :howmuches, :when, :date
  end
end
