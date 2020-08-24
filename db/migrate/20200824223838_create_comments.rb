class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :comment, null: false
      t.integer :parent_comment_id
      t.integer :story_id, null: false
      t.integer :commenter_id, null: false
      t.timestamps
    end
    add_index :comments, :parent_comment_id
    add_index :comments, :story_id
    add_index :comments, :commenter_id
  end
end
