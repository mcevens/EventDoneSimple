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

  def price_range
    min = 0.0
    max = 0.0
    tickets.each_with_index do |ticket,idx|
      if idx == 0
        min = ticket.price
      end
      if ticket.price > max
        max = ticket.price
      end
      if ticket.price < min
        min = ticket.price
      end
    end
    if min == max
      if min == 0.0
        return "FREE"
      else
        return "$#{min}"
      end
    end
     "$#{min.to_s} - $#{max.to_s}"
  end

  def self.find_all_bookmarked_by_current_user(current_user, title, city, date)
    s_date = '1900-01-01'
    e_date = Date.today + 2.year

    case date
    when "Today"
      s_date = Date.today - 1.day
      s_date = s_date.strftime("%D")
      e_date = Date.today + 1.day
      e_date = e_date.strftime("%D")
    when "Tomorrow"
      s_date = Date.today
      s_date = s_date.strftime("%D")
      e_date = Date.today + 1.day
      e_date = e_date.strftime("%D")
    when "This Week"
      s_date = Date.today.beginning_of_week - 1.day
      s_date = s_date.strftime("%D")
      e_date = Date.today.beginning_of_week + 8.day
      e_date = e_date.strftime("%D")
    when "This Weekend"
      s_date = Date.today.beginning_of_week + 5.day
      s_date = s_date.strftime("%D")
      e_date = Date.today.beginning_of_week + 8.day
      e_date = e_date.strftime("%D")
    when "Next Week"
      s_date = Date.today.beginning_of_week + 7.day
      s_date = s_date.strftime("%D")
      e_date = Date.today + 15.day
      e_date = e_date.strftime("%D")
    when "Next Month"
      s_date = Date.today.beginning_of_month - 1.day
      s_date = s_date.strftime("%D")
      e_date = Date.today.end_of_month + 1.day
      e_date = e_date.strftime("%D")
    else
    end

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
         WHERE Lower(events.title) LIKE :title and Lower(events.adresse_line1) LIKE :city
          and start_date > :s_date and start_date < :e_date", {:user_id => current_user.id, :title => "%#{title}%", :city => "%#{city}%", :s_date => "#{s_date}%", :e_date => "#{e_date}" } ]
        )
      values
      p values
    else
      all_events = Event.all
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

  def was_bookmarked
    attributes['was_bookmarked']
  end

  def picture_from_url(url)
    self.image = URI.parse(url).open
  end

  def start_date_month
    start_date.strftime("%b")
  end

  def start_date_day
    start_date.strftime("%u")
  end

  def start_date_full_date
    start_date.strftime("%A, %b %d")
  end

  def start_time_short
    return start_time.strftime("%I:%M %p")  if start_time
  end

  def end_time_short
    return end_time.strftime("%I:%M %p") if end_time
  end

end
