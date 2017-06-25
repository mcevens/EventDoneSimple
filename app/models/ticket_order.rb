class TicketOrder < ActiveRecord::Base

  belongs_to(
    :ticket,
    class_name: "Ticket",
    foreign_key: :ticket_id,
    primary_key: :id
  )

  belongs_to(
    :attendee,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )
end
