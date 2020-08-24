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

end
