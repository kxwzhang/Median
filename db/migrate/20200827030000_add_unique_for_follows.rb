class AddUniqueForFollows < ActiveRecord::Migration[5.2]
  def change
    add_index :follows, [:follower_id, :followed_id], unique: true
  end
end
