class RenameFollowedToFollowee < ActiveRecord::Migration[5.2]
  def change
    rename_column :follows, :followed_id, :followee_id
  end
end
