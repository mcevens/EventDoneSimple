# == Schema Information
#
# Table name: ticket_orders
#
#  id         :integer          not null, primary key
#  ticket_id  :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

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
