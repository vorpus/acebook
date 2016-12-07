class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.text :body, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :posts, :author_id
  end
end
