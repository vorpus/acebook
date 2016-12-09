class CreateFriends < ActiveRecord::Migration[5.0]
  def change
    create_table :friends do |t|
      t.integer :user1, null: false
      t.integer :user2, null: false
      t.string :status, null: false

      t.timestamps
    end

    add_index :friends, [:user1, :user2], :unique => true
  end
end
