json.partial! "api/users/user", user: @user
json.ticket_orders do
  json.array! @user.ticket_orders, partial: 'api/ticket_orders/ticket_order', as: :ticket_order
end
