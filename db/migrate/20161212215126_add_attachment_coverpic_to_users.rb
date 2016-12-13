class AddAttachmentCoverpicToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :coverpic
    end
  end

  def self.down
    remove_attachment :users, :coverpic
  end
end
