# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  body        :text             not null
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  tagged_user :integer
#

class Post < ActiveRecord::Base
  validates :body, :author_id, presence: true
  has_attached_file :image, default_url: "missing-post.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  belongs_to :tagged, optional: true,
    class_name: :User,
    foreign_key: :tagged_user

  has_many :likes,
    class_name: :Like,
    primary_key: :id,
    foreign_key: :post_id

  has_many :comments,
    class_name: :Comment,
    primary_key: :id,
    foreign_key: :post_id
end
