class CreateTickets < ActiveRecord::Migration[5.0]
  def change
    create_table :tickets do |t|
      t.string :name
      t.integer :event_id
      t.integer :ticket_type_id
      t.decimal :price, precision: 5, scale: 2
      t.integer :quantity

      t.timestamps
    end
  end
end
