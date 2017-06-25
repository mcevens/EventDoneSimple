class Api::EventsController < ApplicationController

  def index
     @events = Event.all
   end

   def show
     @event = Event.find_by_id(params[:id])
   end

   def create
     @event = Event.new(event_params)
     @event.creater_id = current_user.id
     if @event.save
       render :show
     else
       render json: @event.errors.full_messages, status: 422
     end
   end

   def update
     @event = Event.find_by_id(params[:id])

     if @event.update_attributes(event_params)
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

   def event_params
     params.require(:event).permit(:id,:title, :online, :start_date, :start_time, :end_date, :end_time,:description, :adresse_line1, :image_url, :topic_id, :subtopic_id)
   end
end
