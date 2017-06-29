# == Schema Information
#
# Table name: topics
#
#  id         :integer          not null, primary key
#  name       :string
#  parent_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Topic < ActiveRecord::Base
  validates :name, presence:true, uniqueness:true

  has_many(
    :subtopics,
    class_name: "topic",
    foreign_key: :topic_id,
    primary_key: :id
  )

  def self.top_topic

  end 

end
