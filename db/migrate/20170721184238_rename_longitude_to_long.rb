class RenameLongitudeToLong < ActiveRecord::Migration[5.0]
  def change
    rename_column :events, :longitude, :long
  end
end
