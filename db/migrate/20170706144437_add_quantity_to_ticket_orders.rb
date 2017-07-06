class AddQuantityToTicketOrders < ActiveRecord::Migration[5.0]
  def change
    add_column :ticket_orders, :quantity, :integer
  end
end
