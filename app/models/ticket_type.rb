# == Schema Information
#
# Table name: ticket_types
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TicketType < ActiveRecord::Base

  has_many(
    :tickets,
    class_name: "Ticket",
    foreign_key: :ticket_type_id,
    primary_key: :id
  )
end
