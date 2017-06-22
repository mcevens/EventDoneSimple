class Api::TopicsController < ApplicationController
  def index
    @topics = Topic.all
  end
end
