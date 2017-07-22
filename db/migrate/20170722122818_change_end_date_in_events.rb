class ChangeEndDateInEvents < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :end_date
    add_column :events, :end_date, :datetime
  end
end
