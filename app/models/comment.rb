# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  comment           :text             not null
#  parent_comment_id :integer
#  story_id          :integer          not null
#  commenter_id      :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Comment < ApplicationRecord
    validates :comment, :story_id, :commenter_id, presence: true

    after_initialize :ensure_story_id!

    belongs_to :story,
        foreign_key: :story_id,
        class_name: :Story,
        inverse_of: :comments

    belongs_to :author,
        foreign_key: :commenter_id,
        class_name: :User,
        inverse_of: :comments

    private
    def ensure_story_id
        self.story_id ||= self.parent_comment.story_id if parent_comment
    end
end
