class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.integer :creater_id
      t.string :title
      t.string :longitude
      t.string :latitude
      t.boolean :online
      t.string :adresseline1
      t.date :startdate
      t.time :starttime
      t.date :enddate
      t.time :endtime
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
