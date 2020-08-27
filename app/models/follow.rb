# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  followee_id :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Follow < ApplicationRecord
  validates :follower, uniqueness: { scope: :followee }

  belongs_to :followee,
    class_name: :User

  belongs_to :follower,
    class_name: :User
end
