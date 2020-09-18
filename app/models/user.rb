# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :email, uniqueness: true, allow_nil: true

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :stories,
        foreign_key: :author_id,
        class_name: :Story,
        dependent: :destroy

    has_many :comments,
        foreign_key: :commenter_id,
        class_name: :Comment,
        inverse_of: :commenter

    has_many :follows,
        primary_key: :id,
        foreign_key: :follower_id,
        class_name: :Follow,
        dependent: :destroy

    has_many :followings,
        primary_key: :id,
        foreign_key: :followee_id,
        class_name: :Follow,
        dependent: :destroy

    has_many :subscriptions,
        through: :follows,
        source: :followee,
        dependent: :destroy


    has_many :subscribers,
        through: :followings,
        source: :follower,
        dependent: :destroy

    has_many :likes,
        foreign_key: :liker_id,
        class_name: :Like

    # ASPIRE
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
