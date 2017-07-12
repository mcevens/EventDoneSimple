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
require 'date'

class Event < ActiveRecord::Base
  attr_accessor  :bookmarked

  validates :title, presence: true
  validates :creater_id, :topic_id, :subtopic_id, presence: true
  validates :start_date, :start_time, :end_date, :end_time, presence: true
  has_attached_file :image,  default_url: "show_picture.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

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
    foreign_key: :event_id,
    primary_key: :id
  )

  def self.find_all_bookmarked_by_current_user(current_user, search_term)

    all_events = Event.all
    user_events = nil
    list_events = []
    if current_user

      # all_events.each do |event|
      #   if current_user.bookmarked_event_ids.include?(event.id)
      #     event.bookmarked = true
      #   else
      #     event.bookmarked = false
      #   end
      #   list_events.push(event)
      # end
      # return list_events
      values =  Event.find_by_sql(["
         SELECT
             events.*
            ,case when event_bookmarks.id is null then
              false
            else
              true
            end

             as was_bookmarked
         FROM
             events
         LEFT JOIN
           event_bookmarks on event_bookmarks.event_id = events.id and event_bookmarks.user_id = :user_id
         WHERE events.title LIKE :search_term
          ", {:user_id => current_user.id, :search_term => "%#{search_term}%" }]
        )
      values
    else
      return all_events
    end
  end

  def self.find_by_id_with_bookmark(id, current_user)
    if current_user
      values =  Event.find_by_sql(["
         SELECT
             events.*
            ,case when event_bookmarks.id is null then
              false
            else
              true
            end

             as was_bookmarked
         FROM
             events
         LEFT JOIN
           event_bookmarks on event_bookmarks.event_id = events.id and event_bookmarks.user_id = :user_id
         WHERE events.id = :id
          ", {:user_id => current_user.id, :id => id }]
        )
       values.first
     else
       return Event.find_by_id(id)
     end
  end

  def picture_from_url(url)
    self.image = URI.parse(url).open
  end

  def start_date_month
    Date.parse(start_date).strftime("%b").upcase
  end

  def start_date_day
    Date.parse(start_date).strftime("%u")
  end

  def start_date_full_date
    Date.parse(start_date).strftime("%A, %b %d") + " " +  start_time[0..-4] + " " + Time.parse(start_time).strftime("%P")
  end


end
