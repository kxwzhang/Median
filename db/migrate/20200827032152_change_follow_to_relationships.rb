class ChangeFollowToRelationships < ActiveRecord::Migration[5.2]
  def change
    rename_table :follows, :relationships
  end
end
