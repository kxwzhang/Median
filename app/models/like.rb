# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liker_id   :integer          not null
#  story_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
  validates :liker_id, :story_id, presence: true

  belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :User

  belongs_to :story,
    foreign_key: :story_id,
    class_name: :Story
end
