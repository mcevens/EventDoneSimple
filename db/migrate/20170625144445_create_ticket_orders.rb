class CreateTicketOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :ticket_orders do |t|
      t.integer :ticket_id
      t.integer :user_id

      t.timestamps
    end
  end
end
