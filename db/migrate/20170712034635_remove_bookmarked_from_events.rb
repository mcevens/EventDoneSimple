class RemoveBookmarkedFromEvents < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :bookmarked
  end
end
