# == Schema Information
#
# Table name: events
#
#  id           :integer          not null, primary key
#  creater_id   :integer
#  title        :string
#  longitude    :string
#  latitude     :string
#  online       :boolean
#  adresseline1 :string
#  startdate    :string
#  starttime    :string
#  enddate      :string
#  endtime      :string
#  description  :string
#  image        :string
#  topic_id     :integer
#  subtopic_id  :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Event < ActiveRecord::Base

  belongs_to(
    :creater,
    class_name: "User",
    foreign_key: :creater_id,
    primary_key: :id
  )

  belongs_to(
    :topic,
    class_name: "Topic",
    foreign_key: :topic_id,
    primary_key: :id
  )

  belongs_to(
    :subtopic,
    class_name: "Topic",
    foreign_key: :subtopic_id,
    primary_key: :id
  )
end
