class CreateHowmuches < ActiveRecord::Migration[5.2]
  def change
    create_table :howmuches do |t|
      t.integer    :money,    null: false
      t.references :member,   null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true
      t.references :detail,   null: false, foreign_key: true
      t.timestamps
    end
  end
end
