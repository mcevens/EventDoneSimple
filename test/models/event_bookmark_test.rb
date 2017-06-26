# == Schema Information
#
# Table name: event_bookmarks
#
#  id         :integer          not null, primary key
#  event_id   :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class EventBookmarkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
