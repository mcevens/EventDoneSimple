class AddNameToTickets < ActiveRecord::Migration[5.0]
  def change
    add_column :tickets, :name, :string
  end
end
