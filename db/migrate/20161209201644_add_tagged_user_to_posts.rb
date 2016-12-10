class AddTaggedUserToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :tagged_user, :integer

    add_column :users, :profilepic_url, :string
    add_column :users, :coverpic_url, :string
  end
end
