class CreateApiSessions < ActiveRecord::Migration[5.2]
  def change
    create_table :api_sessions do |t|

      t.timestamps
    end
  end
end
