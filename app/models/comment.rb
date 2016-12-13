# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  post_id    :integer          not null
#

class Comment < ActiveRecord::Base
  validates :author, :post, :body, presence: true

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

  belongs_to :post,
    class_name: :Post,
    primary_key: :id,
    foreign_key: :post_id

end
