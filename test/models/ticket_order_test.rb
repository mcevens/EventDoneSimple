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

require 'test_helper'

class TicketOrderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
