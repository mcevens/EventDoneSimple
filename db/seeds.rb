# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all

guest = User.create!(
 email: "guest",
 password: "passpass"
)

test_user = User.create!(
 email: "UserTest",
 password: "passpass"
)

if TicketType.all.count === 0
  free_ticket = TicketType.create(
   id:1,
   name:"FREE"
  )

  paid_ticket = TicketType.create(
   id:2,
   name:"PAID"
  )

  donation_ticket = TicketType.create(
   id:3,
   name:"DONATION"
  )
end

Topic.delete_all

music = Topic.create(name:'Music')
other = Topic.create(name:'Other')
business = Topic.create(name:'Business')
food = Topic.create(name:'Food & Drink')
arts = Topic.create(name:'Arts')
community = Topic.create(name:'Community')
health = Topic.create(name:'Health')
sport = Topic.create(name:'Sports & Fitness')
family = Topic.create(name:'Family & Education')
film = Topic.create(name:'Film & Media')
charity = Topic.create(name:'Charity & Causes')
fashion = Topic.create(name:'Fashion')
hobby = Topic.create(name:'Hobbies')
science = Topic.create(name:'Science & Tech')
spirituality = Topic.create(name:'Spirituality')
homelife = Topic.create(name:'Home & LifeStyle')
travel = Topic.create(name:'Travel & Outdoor')
holiday = Topic.create(name:'Holiday')
government = Topic.create(name:'Government')

Event.delete_all

event1 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
image_url: nil,
description: "This meeting is an opportunity to meet the great lady gaga",
topic_id: music.id,
subtopic_id: music.id
)

event2 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: business.id,
subtopic_id: business.id
)

event3 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: food.id,
subtopic_id: food.id
)

event4 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: arts.id,
subtopic_id: arts.id
)

event5 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: community.id,
subtopic_id: community.id
)

event6 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: music.id,
subtopic_id: music.id
)

event7 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: health.id,
subtopic_id: health.id
)

event8 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: sport.id,
subtopic_id: sport.id
)


event9 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: family.id,
subtopic_id: family.id
)

event10 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: film.id,
subtopic_id: film.id
)

event11 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: charity.id,
subtopic_id: charity.id
)

event12 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: fashion.id,
subtopic_id: fashion.id
)

event13 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: hobby.id,
subtopic_id: hobby.id
)

event14 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: science.id,
subtopic_id: science.id
)

event15 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: spirituality.id,
subtopic_id: spirituality.id
)

event16 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: homelife.id,
subtopic_id: homelife.id
)

event16 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: travel.id,
subtopic_id: travel.id
)

event16 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: holiday.id,
subtopic_id: holiday.id
)

event16 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
longitude: nil,
latitude: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "2017-12-25",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: government.id,
subtopic_id: government.id
)
