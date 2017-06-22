class Topic < ActiveRecord::Base
  validates :name, presence:true, uniqueness:true

  has_many(
    :subtopics,
    class_name: "topic",
    foreign_key: :topic_id,
    primary_key: :id
  )

end
