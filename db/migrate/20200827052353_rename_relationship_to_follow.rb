class RenameRelationshipToFollow < ActiveRecord::Migration[5.2]
  def change
    rename_table :relationships, :follows
  end
end
