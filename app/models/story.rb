# == Schema Information
#
# Table name: stories
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  subtitle   :string           not null
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Story < ApplicationRecord
    validates :title, :subtitle, :body, :author_id, presence: true

    has_one_attached :photo

    belongs_to :author, 
        foreign_key: :author_id,
        class_name: :User

    has_many :comments, 
        foreign_key: :story_id,
        class_name: :Comment,
        inverse_of: :story

    def comments_by_parent
        comments_by_parent = Hash.new { |hash, key| hash[key] = [] }

        self.comments.includes(:parent_comment).each do |comment|
            comments_by_parent[comment.parent_comment_id] << comment
        end

        comments_by_parent
    end

    def comment_username
        comment_username = {}

        self.comments.includes(:commenter).each do |comment|
            comment_username[comment.commenter.id] = comment.commenter.username
        end

        comment_username
    end
    
end
