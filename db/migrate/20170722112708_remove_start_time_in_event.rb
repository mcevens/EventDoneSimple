class RemoveStartTimeInEvent < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :start_time
  end
end
