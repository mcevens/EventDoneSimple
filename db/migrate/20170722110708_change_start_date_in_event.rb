class ChangeStartDateInEvent < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :start_date
    add_column :events, :start_date, :datetime
  end
end
