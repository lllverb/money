class CreateDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :details do |t|
      t.string     :name, null: false
      t.integer    :money, null: false
      t.references :category, null:false, foreign_key: true
      t.references :member, null:false, foreign_key: true
      t.timestamps
    end
  end
end
