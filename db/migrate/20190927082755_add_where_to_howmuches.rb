class AddWhereToHowmuches < ActiveRecord::Migration[5.2]
  def change
    add_column :howmuches, :where, :string
  end
end
