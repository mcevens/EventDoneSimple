class Api::TicketOrdersController < ApplicationController
  def show
    @ticket_order = TicketOrder.find_by_id(params[:id])
  end

  def create
    debugger
    errors = []

    ActiveRecord::Base.transaction do
       i = 0
       while i < params["_json"].length
         clean_params = {}
         clean_params[:quantity] = params["_json"][i]["quantity"]
         clean_params[:ticket_id] = params["_json"][i]["ticket_id"]
         ticket_order = TicketOrder.new(clean_params)
         ticket_order.user_id = current_user.id
         wasSaved = ticket_order.save
         
         unless wasSaved
            errors.push(ticket_order.errors.full_messages)
         end
         i+=1
       end
      end


    if errors.length == 0
      render :show
    else
      render json: errors, status: 422
    end
  end

  private
  def ticket_order_params
    params.require(:ticket_order).permit(:quantity, :ticket_id, :_json)
  end
end
