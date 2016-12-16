# == Schema Information
#
# Table name: users
#
#  id                      :integer          not null, primary key
#  firstname               :string           not null
#  lastname                :string           not null
#  email                   :string           not null
#  password_digest         :string           not null
#  session_token           :string           not null
#  birthday                :date             not null
#  gender                  :string           not null
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  current_town            :string
#  home_town               :string
#  relationship            :string
#  workplace               :string
#  school                  :string
#  profilepic_url          :string
#  coverpic_url            :string
#  profilepic_file_name    :string
#  profilepic_content_type :string
#  profilepic_file_size    :integer
#  profilepic_updated_at   :datetime
#  coverpic_file_name      :string
#  coverpic_content_type   :string
#  coverpic_file_size      :integer
#  coverpic_updated_at     :datetime
#

class User < ActiveRecord::Base
  validates :firstname, :lastname, :birthday, :gender, :session_token, :password_digest, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_attached_file :profilepic, default_url: "missing.png"
  validates_attachment_content_type :profilepic, content_type: /\Aimage\/.*\Z/

  has_attached_file :coverpic, default_url: "no-cover.png"
  validates_attachment_content_type :coverpic, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  has_many :posts,
    primary_key: :id,
    foreign_key: :author_id

  has_many :friends,
    class_name: :Friend,
    primary_key: :id,
    foreign_key: :user1

  has_many :mentions,
    class_name: :Post,
    primary_key: :id,
    foreign_key: :tagged_user

  has_many :likes,
    class_name: :Like,
    primary_key: :id,
    foreign_key: :user_id

  has_many :comments,
    class_name: :Comment,
    primary_key: :id,
    foreign_key: :author_id

  attr_reader :password

  def self.find_by_credentials(email, password)
    return nil if email.blank? || password.blank?
    @user = User.find_by(email: email)
    return nil if @user.nil?
    return @user if @user.is_password?(password)
    return nil
  end

  def self.search(search_string)
    User.where("LOWER(CONCAT(firstname, lastname)) LIKE LOWER('%#{search_string}%') AND ? != '' ", search_string)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def active_friends
    User.where(id: Friend.active_friendships(self))
  end

  def requesting_friends
    User.where(id: Friend.requesting_friendships(self))
  end

  def requested_friends
    User.where(id: Friend.requested_friendships(self))
  end

  def friend_status(user2)
    Friend.friend_status(self, user2)
  end
end
