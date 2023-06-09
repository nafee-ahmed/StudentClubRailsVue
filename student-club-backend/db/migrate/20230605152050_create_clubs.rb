class CreateClubs < ActiveRecord::Migration[7.0]
  def change
    create_table :clubs do |t|
      t.string :title
      t.string :about
      t.float :fee
      t.float :pastActiveMembers
      t.string :contactName
      t.string :contact

      t.timestamps
    end
  end
end
