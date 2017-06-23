class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.integer :creater_id
      t.string :title
      t.string :longitude
      t.string :latitude
      t.boolean :online
      t.string :adresse_line1
      t.string :start_date
      t.string :start_time
      t.string :end_date
      t.string :end_time
      t.string :description
      t.string :image_url
      t.integer :topic_id
      t.integer :subtopic_id

      t.timestamps
    end
  end
end
