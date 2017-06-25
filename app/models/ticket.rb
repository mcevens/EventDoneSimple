class Ticket < ActiveRecord::Base

  belongs_to(
    :event,
    class_name: "Event",
    foreign_key: :event_id,
    primary_key: :id
  )

  belongs_to(
    :ticket_type,
    class_name: "TicketType",
    foreign_key: :ticket_type_id,
    primary_key: :id
  )

  has_many(
    :ticket_orders,
    class_name: "TicketOrder",
    foreign_key: :ticket_id,
    primary_key: :id
  )

  def type
    ticket_type.name
  end

end
