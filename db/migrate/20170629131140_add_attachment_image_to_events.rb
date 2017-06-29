class AddAttachmentImageToEvents < ActiveRecord::Migration
  def self.up
    change_table :events do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :events, :image
  end
end
