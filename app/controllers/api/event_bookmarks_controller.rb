class Api::EventBookmarksController < ApplicationController
  def index
    if params[:current_user_id]
      @event_bookmarks = EventBookmark.all.where(user_id: current_user.id)
    else
      @event_bookmarks = EventBookmark.all
    end
  end

  def create

    @event_bookmark = EventBookmark.new()
    @event_bookmark.event_id = bookmark_params.to_i
    @event_bookmark.user_id = current_user.id
    if @event_bookmark.save
      render json: @event_bookmark
    else
      render json: @event_bookmark.errors.full_messages, status: 422
    end
  end

  def destroy
    bookmarks = EventBookmark.where("user_id = ? and event_id = ?", current_user.id, params[:id])
    @event_bookmark = bookmarks.first
    @event_bookmark.destroy
    render json: @event_bookmark
  end

  def bookmark_params
    new_params  = params[:eventBookmark]
    return new_params
  end

end
