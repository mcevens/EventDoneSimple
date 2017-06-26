# == Schema Information
#
# Table name: tickets
#
#  id             :integer          not null, primary key
#  event_id       :integer
#  ticket_type_id :integer
#  price          :decimal(5, 2)
#  quantity       :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class TicketTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
