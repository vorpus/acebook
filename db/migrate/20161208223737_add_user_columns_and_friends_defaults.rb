class AddUserColumnsAndFriendsDefaults < ActiveRecord::Migration[5.0]
  def change
    change_column :friends, :status, :string, :default => "pending", :null => false

    add_column :users, :current_town, :string
    add_column :users, :home_town, :string
    add_column :users, :relationship, :string
    add_column :users, :workplace, :string
    add_column :users, :school, :string
  end
end
