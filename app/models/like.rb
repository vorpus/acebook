# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  post_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ActiveRecord::Base
  validates :post, :user, presence: true
  validates_uniqueness_of :post_id, :scope => [:user_id]

  belongs_to :post,
    class_name: :Post,
    primary_key: :id,
    foreign_key: :post_id

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id
end
