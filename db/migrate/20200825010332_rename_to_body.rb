class RenameToBody < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :comment
  end
end
