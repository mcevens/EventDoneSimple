class AddBookmarkedToEvent < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :bookmarked, :boolean
  end
end
