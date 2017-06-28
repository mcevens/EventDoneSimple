class Api::EventBookmarksController < ApplicationController
  def index
    if params[:current_user_id]
      @event_bookmarks = EventBookmark.all.where(user_id: current_user.id)
    else
      @event_bookmarks = EventBookmark.all
    end
  end

  def create
    @event_bookmark = EventBookmark.new(bookmark_params)
    @event_bookmark.user_id = current_user.id
    if @event_bookmark.save
      render :show
    else
      render json: @event_bookmark.errors.full_messages, status: 422
    end
  end

  def destroy
    @event_bookmark = EventBookmark.find_by_user_and_event(current_user.id, params[:event_id])
    @event_bookmark.destroy
    render json: @event_bookmark
  end

  def bookmark_params
    params.require(:event_bookmark).permit(:event_id)
  end

end
