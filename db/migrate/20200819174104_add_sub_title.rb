class AddSubTitle < ActiveRecord::Migration[5.2]
  def change
    add_column :stories, :subtitle, :string, null: false
  end
end
