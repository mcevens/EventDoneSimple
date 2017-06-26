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

class EventBookmark < ActiveRecord::Base

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  belongs_to(
    :event,
    class_name: "Event",
    foreign_key: :event_id,
    primary_key: :id
  )

  def find_by_user_and_event(user_id, event_id)
    event_bookmarks = EventBookmark.find_by(user_id: user_id)

    event_bookmarks.each do |event_bookmark|
      if event_bookmark.event_id == event_id
        return event_bookmark
      end
    end
    return nil
  end

end
