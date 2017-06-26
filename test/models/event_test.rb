# == Schema Information
#
# Table name: events
#
#  id            :integer          not null, primary key
#  creater_id    :integer
#  title         :string
#  longitude     :string
#  latitude      :string
#  online        :boolean
#  adresse_line1 :string
#  start_date    :string
#  start_time    :string
#  end_date      :string
#  end_time      :string
#  description   :string
#  image_url     :string
#  topic_id      :integer
#  subtopic_id   :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
