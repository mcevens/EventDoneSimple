json.extract! user, :id, :email, :saved_bookmark_events_count, :ticket_orders_count
# json.ticket_orders do
#   json.array! @user.ticket_orders, partial: 'api/ticket_orders/ticket_order', as: :ticket_order
# # end
# json.events do
#   json.array! user.created_events, partial: 'api/events/event', as: :event
# end
# json.partial! 'api/events/event', collection: user.created_events

# json.array! user.created_events do |event|
#   json.partial! 'api/events/event', event: event
# end
