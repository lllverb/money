class AddNameToHowmuches < ActiveRecord::Migration[5.2]
  def change
    add_column :howmuches, :name, :string
  end
end
