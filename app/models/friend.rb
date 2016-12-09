# == Schema Information
#
# Table name: friends
#
#  id         :integer          not null, primary key
#  user1      :integer          not null
#  user2      :integer          not null
#  status     :string           default("pending"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friend < ActiveRecord::Base
  validates :user1, :user2, :status, presence: true
  validates :user1, uniqueness: { scope: :user2 }
  validates :status, :inclusion => { in: ["pending", "active"]}

  belongs_to :friender,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user1

  belongs_to :friendee,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user2

  def self.active_friendships(user)
    actives = Friend
      .where("user1 = #{user.id} OR user2 = #{user.id}")
      .where("status = 'active'")
      .pluck(:user1, :user2)
      .flatten
      .uniq

    actives.delete(user.id)

    actives
  end

  def self.pending_friendships(user)
    pendings = Friend
      .where("user1 = #{user.id} OR user2 = #{user.id}")
      .where("status = 'pending'")
      .pluck(:user1, :user2)
      .flatten
      .uniq

    pendings.delete(user.id)

    pendings
  end

  def self.requesting_friendships(user)
    # PENDING people who this user sent requests to (aka user = user1)
    pendings = Friend
      .where("user1 = #{user.id}")
      .where("status = 'pending'")
      .pluck(:user2)
      .uniq
  end

  def self.requested_friendships(user)
    # PENDING people who want to be friends with this guy (user = user2)
    pendings = Friend
      .where("user2 = #{user.id}")
      .where("status = 'pending'")
      .pluck(:user1)
      .uniq
  end

  def self.find_friendship(user_a, user_b)
    ua = user_a.class == Fixnum ? user_a : user_a.id
    ub = user_b.class == Fixnum ? user_b : user_b.id

    pendings = Friend
      .where("user1 = #{ua} AND user2 = #{ub}")
    requests = Friend
      .where("user1 = #{ub} AND user2 = #{ua}")
    if pendings.length > 0
      return pendings.first
    elsif requests.length > 0
      return requests.first
    else
      return nil
    end
  end

  def self.friend_status(user_a, user_b)
    ua = user_a.class == User ? user_a.id : user_a
    ub = user_b.class == User ? user_b.id : user_b

    pendings = Friend
      .where("user1 = #{ua} AND user2 = #{ub}")
    if pendings.length > 0
      if pendings.first.status == "pending"
        return "requesting"
      elsif pendings.first.status == "active"
        return "active"
      end
    end
    requests = Friend
      .where("user1 = #{ub} AND user2 = #{ua}")
    if requests.length > 0
      if requests.first.status == "pending"
        return "need_action"
      elsif requests.first.status == "active"
        return "active"
      end
    end
    return nil
  end
end
