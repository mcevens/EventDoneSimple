json.partial! "api/users/user", user: @user

json.ticket_orders do
  json.array! @user.ticket_orders, partial: 'api/ticket_orders/ticket_order', as: :ticket_order
end

json.events do
  json.array! @user.created_events, partial: 'api/events/event', as: :event
end
