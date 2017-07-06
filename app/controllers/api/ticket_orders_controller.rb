
def show
  @ticket_order = TicketOrder.find_by_id(params[:id])
end

def create
  @ticket_order =  TicketOrder.new(ticket_order_params)
  @ticket_order.user_id = current_user.id
  if @ticket_order.save
    render :show
  else
    render json: @ticket_order.errors.full_messages, status: 422
  end
end

private
def ticket_order_params
  params.require(:ticket_order).permit(:quantity, :ticket_id)
end
