json.event do
  json.extract! @event, :id, :title, :start_date, :price_range, :start_time, :end_date, :start_time_short, :end_time_short, :end_time,:description, :adresse_line1, :topic_id, :subtopic_id, :long, :lat, :topic_name, :was_bookmarked, :start_date_month, :start_date_day, :start_date_full_date
  json.image_url asset_path(@event.image.url)
end

json.tickets do
  json.array! @event.tickets, partial: 'api/tickets/ticket', as: :ticket
end
