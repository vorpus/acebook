# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ActiveRecord::Base
  validates :body, :author_id, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id
end
