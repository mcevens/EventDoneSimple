class RenameLatitudeInEvents < ActiveRecord::Migration[5.0]
  def change
    rename_column :events, :latitude, :lat
  end
end
