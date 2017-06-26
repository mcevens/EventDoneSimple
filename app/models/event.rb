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

  def topic_name
    return topic.name
  end

  def subtopic_name
    return subtopic.name
  end

  has_many(
    :tickets,
    class_name: "Ticket",
    foreign_key: :ticket_id,
    primary_key: :id
  )

end
