class FixUniquenessLikes < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, :liker_id
    remove_index :likes, :story_id
    add_index :likes, :liker_id
    add_index :likes, :story_id
    add_index :likes, [:liker_id, :story_id], unique: true
  end
end
