class Api::EventsController < ApplicationController

  def index
    search_term = ''
    if params[:searchTerm].present?
      search_term = params[:searchTerm].downcase
    end

    @events = Event.find_all_bookmarked_by_current_user(current_user, search_term)
   end

   def show
     @event = Event.find_by_id_with_bookmark(params[:id], current_user)
   end

   def create
     @event =  extractEvent(received_params)
     @tickets = newExtractTicket(params)
     @event.creater_id = current_user.id
     @event.subtopic_id = @event.topic_id

     if @event.save
       @tickets.each do |ticket|
         ticket.event_id = @event.id
         ticket.save
       end
       render :show
     else
       render json: @event.errors.full_messages, status: 422
     end
   end

   private
   def newExtractTicket(received_params)
     ticketString  = received_params[:event][:tickets]
     tickets = []
     ticketArray = ticketString.split(";")

     ticketArray.each do |elem|
       ticket_params = {}
       ticket_received = elem.split(",")

       ticket_params[:name] = ticket_received[0]
       ticket_params[:ticket_type_id] = 1
       ticket_params[:price] = 0
       ticket_params[:quantity] = ticket_received[1]

       ticket = Ticket.new(ticket_params)
       tickets.push(ticket)
     end

      tickets
   end

   private
   def extractEvent(received_params)
     event_params = {}
     event_params[:id] = received_params[:id]
     event_params[:title] = received_params[:title]
     event_params[:online] = received_params[:online]
     event_params[:start_date] = received_params[:start_date]
     event_params[:start_time] = received_params[:start_time]
     event_params[:end_date] = received_params[:end_date]
     event_params[:end_time] = received_params[:end_time]
     event_params[:description] = received_params[:description]
     event_params[:adresse_line1] = received_params[:adresse_line1]
     event_params[:image_url] = received_params[:image_url]
     event_params[:topic_id] = received_params[:topic_id]
     event_params[:subtopic_id] = received_params[:subtopic_id]
     event_params[:image] = received_params[:image]
     event = Event.new(event_params)
   end

   private
   def extractTickets(received_params)
     tickets_received = received_params[:event][:tickets]
     tickets = []

     tickets_received.values.each do |ticket_received|
       tickets.push(extractTicket(ticket_received))
     end

     tickets
   end

   def extractTicket(ticket_received)
      ticket_params = {}
      ticket_params[:name] = ticket_received[:name]
      ticket_params[:ticket_type_id] = 1
      ticket_params[:price] = ticket_received[:price]
      ticket_params[:quantity] = ticket_received[:quantity]
      ticket = Ticket.new(ticket_params)
   end

   def update
     @event = Event.find_by_id(params[:id])

     if @event.update_attributes(received_params)
       render :show
     else
       render json: @event.errors.full_messages, status: 422
     end
   end

   def destroy
     @event = Event.find_by_id(params[:id])
     @event.destroy
     render json: @event
   end

   private

   def received_params
     params.require(:event).permit(:id,:title, :image, :online, :start_date, :start_time, :end_date, :end_time,:description, :adresse_line1, :image_url, :topic_id, :subtopic_id, tickets_list: [], tickets:[])
   end
end
