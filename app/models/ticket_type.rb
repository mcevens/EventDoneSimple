class TicketType < ActiveRecord::Base

  has_many(
    :tickets,
    class_name: "Ticket",
    foreign_key: :ticket_type_id,
    primary_key: :id
  )
end
