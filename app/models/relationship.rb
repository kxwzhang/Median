# == Schema Information
#
# Table name: relationships
#
#  id          :bigint           not null, primary key
#  followed_id :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Relationship < ApplicationRecord
    validates :follower_id, :followed_id, presence: true

    belongs_to :follower,
        foreign_key: :follower_id,
        class_name: :User

    belongs_to :followed,
        foreign_key: :followed_id,
        class_name: :User
end
