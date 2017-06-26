class Api::TicketsController < ApplicationController

  def update
    @ticket = Ticket.find(params[:id])
    if @ticket.update(ticket_params))
      event = @ticket.event
      render json: event, include: [:tickets]
    else
      render json: @ticket.errors.full_messages, status:422
    end
  end

  def ticket_params
    params.require(:ticket).permit(:event_id, :ticket_type_id, :price, :quantity)
  end
end
