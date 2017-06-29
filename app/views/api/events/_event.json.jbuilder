json.extract! event, :id, :title, :start_date, :start_time, :end_date, :end_time,:description, :adresse_line1, :topic_id, :subtopic_id, :topic_name, :bookmarked, :start_date_month, :start_date_day, :start_date_full_date
json.image_url asset_path(event.image.url)
