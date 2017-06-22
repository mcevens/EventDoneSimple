class TopicController < ApplicationController
  def index
    @topics = Topic.all
  end
end
