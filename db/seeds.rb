# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

test_user = User.find_by(email:"guest")

unless test_user
  test_user = User.create!(
  email: "guest",
  password: "passpass"
 )
end

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

if Topic.all.count === 0

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

else

  music = Topic.find_by(name:'Music')
  other = Topic.find_by(name:'Other')
  business = Topic.find_by(name:'Business')
  food = Topic.find_by(name:'Food & Drink')
  arts = Topic.find_by(name:'Arts')
  community = Topic.find_by(name:'Community')
  health = Topic.find_by(name:'Health')
  sport = Topic.find_by(name:'Sports & Fitness')
  family = Topic.find_by(name:'Family & Education')
  film = Topic.find_by(name:'Film & Media')
  charity = Topic.find_by(name:'Charity & Causes')
  fashion = Topic.find_by(name:'Fashion')
  hobby = Topic.find_by(name:'Hobbies')
  science = Topic.find_by(name:'Science & Tech')
  spirituality = Topic.find_by(name:'Spirituality')
  homelife = Topic.find_by(name:'Home & LifeStyle')
  travel = Topic.find_by(name:'Travel & Outdoor')
  holiday = Topic.find_by(name:'Holiday')
  government = Topic.find_by(name:'Government')
end


Event.delete_all

if Event.all.count === 0

event1 = Event.create(
creater_id:test_user.id,
title: "NYC PARKS PRESENTS ARTS, CULTURE & FUN:",
long: -73.127751,
lat: 40.836209,
online: nil,
adresse_line1: "El Castillo, San Nicolas",
start_date:"2017-12-25 00:00:00",
start_time:"8:00:00",
end_date: "2017-12-26 00:00:00",
end_time: "9:00:00",
image_url: nil,
description: "At New York's High School of Performing Arts, students from all walks of life get the chance
              to hone their skills as singers, actors, dancers and more. Over four years, the young men and women will see if
              they truly have the dedication and talent to achieve success, while still
              juggling regular schoolwork, feelings of self-doubt and budding romances",
topic_id: music.id,
subtopic_id: music.id,
image: File.open('app/assets/images/art.jpg')
)

ticket_1_1  = Ticket.create(
  name: "Free entry for family",
  quantity: 10,
  price: 0,
  ticket_type_id:1,
  event_id: event1.id
)

ticket_1_2  = Ticket.create(
  name: "Strangers get tickets",
  quantity: 10,
  price: 12,
  ticket_type_id:2,
  event_id: event1.id
)

ticket_1_3  = Ticket.create(
  name: "Long time friends invited",
  quantity: nil,
  price: 0,
  ticket_type_id:3,
  event_id: event1.id
)

book_mark_event1 = EventBookmark.create(
  user_id: test_user.id,
  event_id: event1.id
)

event2 = Event.create(
creater_id:test_user.id,
title: "Long Island After Work Thursday Social Parties",
long: nil,
lat: nil,
online: nil,
adresse_line1: "New York, New York",
start_date:"2017-7-13",
start_time:"8:00:00",
end_date: "2017-7-13",
end_time: "11:00:00",
description: "Work hard party harder.. After a long day at work, it's time to enjoy, mingle, network, and party in style.
Long Island Social Party every Thursday at Le Caire Lounge is a great chance for networking and partying with fun professionals.
$4 Beers / $5 Well Mixed Drinks till 8pm at the bar.
$25 Sangria pitchers all night.
Fresh Fruit Hookahs and bottle service also available.
For groups of 5 or more, it's recommended to make a reservation.",
image_url: nil,
topic_id: business.id,
subtopic_id: business.id,
image: File.open('app/assets/images/business.jpg')
)

ticket_2_1  = Ticket.create(
  name: "Free entry for everyone",
  quantity: 10,
  price: 0,
  ticket_type_id:1,
  event_id: event2.id
)

event3 = Event.create(
creater_id:test_user.id,
title: "Long Island Ladies Night Wedensdays at Le Caire Lounge",
long: nil,
lat: nil,
online: nil,
adresse_line1: "NYST Bronx, Bronx",
start_date:"2017-07-12",
start_time:"8:00:00 PM",
end_date: "2017-07-13",
end_time: "5:00:00 AM",
description: "Ladies, get dressed to the nines and get ready for a feel good vibe while sipping on our $5 Well Mixed Drinks All Night (at the bar).
Great International beat mixes.
Fresh fruit hookahs & bottle service also available.
We still honor our daily happy hour deals of $4 Beers & $5 Mixed Drinks till 8pm for everyone.",
image_url: nil,
topic_id: food.id,
subtopic_id: food.id,
image: File.open('app/assets/images/food.png')
)

ticket_3_1  = Ticket.create(
  name: "GENERAL ADMISSION",
  quantity: 10,
  price: 0,
  ticket_type_id:1,
  event_id: event3.id
)

event4 = Event.create(
creater_id:test_user.id,
title: "Young Artists' Studio Sessions - Drawing & Sketching - Summer 1",
long: nil,
lat: nil,
online: nil,
adresse_line1: "The Bott Shoppe - Studio & Store
172 East Boston Post Road
Mamaroneck, NY 10543",
start_date:"2017-07-11",
start_time:"8:00:00",
end_date: "2017-07-11",
end_time: "10:00:00 AM",
description: "Young artists refine their abilities to draw what they see and learn about a variety of artists and art history while exploring different aspects of drawing and sketching including; fundamentals & techniques. Projects include drawing and sketching with charcoal, pen and ink, mixed media, print-making, paper techniques and tech-aided design.
Each session is meant to be a studio session with minimal guidance and more of a practice led by instructor.",
image_url: nil,
topic_id: arts.id,
subtopic_id: arts.id,
image: File.open('app/assets/images/art.jpg')
)


ticket_4_1  = Ticket.create(
  name: "STUDIO SESSION",
  quantity: 6,
  price: 25,
  ticket_type_id:2,
  event_id: event4.id
)

ticket_4_2  = Ticket.create(
  name: "STUDIO SESSION(6 SESSIONS)",
  quantity: 6,
  price: 125,
  ticket_type_id:2,
  event_id: event4.id
)

event5 = Event.create(
creater_id:test_user.id,
title: "FOR THE CULTURE",
long: nil,
lat: nil,
online: nil,
adresse_line1: "2244 Washington Avenue
Bronx, NY 10457",
start_date:"2017-08-04",
start_time:"9:00:00 PM",
end_date: "2017-08-05",
end_time: "05:00:00 AM",
description: "BRING YOUR OWN BOTTLE, BRING YOUR OWN HOOKAH, UNLIMITED PUNCH PROVIDED
(free) IF YOU DO NOT HAVE A HOOKAH ITS OK!!! WE GOT YOU!!! $10 Per Hookah,
$5 REFILLS.....LIVE DJ: DJSMILES!......PLENTY OF SPACE TO GET LIT!! WE WILL NOT ACCEPT SCREENSHOTS OF TICKETS,
ALSO WE ARE GOING TO HAVE A GUESTLIST ONCE YOU PURCHASE YOUR TICKETS IT WILL BE UPDATED. BRING YOUR FRIENDS AND COME PARTY WITH US.
IF YOU HAVE ANY QUESTION CONTACT : (917)622-5758 or (646)956-0399",
image_url: nil,
topic_id: community.id,
subtopic_id: community.id,
image: File.open('app/assets/images/community.jpg')
)

ticket_5_1  = Ticket.create(
  name: "GENERAL ADMISSION",
  quantity: 10,
  price: 20,
  ticket_type_id:2,
  event_id: event5.id
)

event6 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
long: nil,
lat: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "10:00:00 AM",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: music.id,
subtopic_id: music.id,
image: File.open('app/assets/images/film_&_media.png')
)

ticket_6_1  = Ticket.create(
  name: "Free entry for family",
  quantity: 10,
  price: 0,
  ticket_type_id:1,
  event_id: event6.id
)

ticket_6_2  = Ticket.create(
  name: "Strangers get tickets",
  quantity: 10,
  price: 12,
  ticket_type_id:2,
  event_id: event6.id
)

ticket_6_3  = Ticket.create(
  name: "Long time friends invited",
  quantity: nil,
  price: 0,
  ticket_type_id:3,
  event_id: event6.id
)

event7 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
long: nil,
lat: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "10:00:00 AM",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: health.id,
subtopic_id: health.id,
image: File.open('app/assets/images/health.gif')
)

ticket_7_1  = Ticket.create(
  name: "Free entry for family",
  quantity: 10,
  price: 0,
  ticket_type_id:1,
  event_id: event7.id
)

ticket_7_2  = Ticket.create(
  name: "Strangers get tickets",
  quantity: 10,
  price: 12,
  ticket_type_id:2,
  event_id: event7.id
)

ticket_7_3  = Ticket.create(
  name: "Long time friends invited",
  quantity: nil,
  price: 0,
  ticket_type_id:3,
  event_id: event7.id
)

event8 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
long: nil,
lat: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "10:00:00 AM",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: sport.id,
subtopic_id: sport.id,
image: File.open('app/assets/images/sports.jpg')
)

ticket_8_1  = Ticket.create(
  name: "Free entry for family",
  quantity: 10,
  price: 0,
  ticket_type_id:1,
  event_id: event8.id
)

ticket_8_2  = Ticket.create(
  name: "Strangers get tickets",
  quantity: 10,
  price: 12,
  ticket_type_id:2,
  event_id: event8.id
)

ticket_8_3  = Ticket.create(
  name: "Long time friends invited",
  quantity: nil,
  price: 0,
  ticket_type_id:3,
  event_id: event8.id
)

event9 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
long: nil,
lat: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "10:00:00 AM",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: family.id,
subtopic_id: family.id,
image: File.open('app/assets/images/family_and_education.jpg')
)

ticket_9_1  = Ticket.create(
  name: "Free entry for family",
  quantity: 10,
  price: 0,
  ticket_type_id:1,
  event_id: event9.id
)

ticket_9_2  = Ticket.create(
  name: "Strangers get tickets",
  quantity: 10,
  price: 12,
  ticket_type_id:2,
  event_id: event9.id
)

ticket_9_3  = Ticket.create(
  name: "Long time friends invited",
  quantity: nil,
  price: 0,
  ticket_type_id:3,
  event_id: event9.id
)

event10 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
long: nil,
lat: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "10:00:00 AM",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: film.id,
subtopic_id: film.id,
image: File.open('app/assets/images/film_&_media.png')
)

ticket_10_1  = Ticket.create(
  name: "Free entry for family",
  quantity: 10,
  price: 0,
  ticket_type_id:1,
  event_id: event10.id
)

ticket_10_2  = Ticket.create(
  name: "Strangers get tickets",
  quantity: 10,
  price: 12,
  ticket_type_id:2,
  event_id: event10.id
)

ticket_10_3  = Ticket.create(
  name: "Long time friends invited",
  quantity: nil,
  price: 0,
  ticket_type_id:3,
  event_id: event10.id
)

event11 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
long: nil,
lat: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "10:00:00 AM",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: charity.id,
subtopic_id: charity.id,
image: File.open('app/assets/images/charity_&_cause.jpg')
)

ticket_11_1  = Ticket.create(
  name: "Free entry for family",
  quantity: 10,
  price: 0,
  ticket_type_id:1,
  event_id: event11.id
)

ticket_11_2  = Ticket.create(
  name: "Strangers get tickets",
  quantity: 10,
  price: 12,
  ticket_type_id:2,
  event_id: event11.id
)

ticket_11_3  = Ticket.create(
  name: "Long time friends invited",
  quantity: nil,
  price: 0,
  ticket_type_id:3,
  event_id: event11.id
)

event12 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
long: nil,
lat: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "10:00:00 AM",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: fashion.id,
subtopic_id: fashion.id,
image: File.open('app/assets/images/fashion.png')
)

ticket_12_1  = Ticket.create(
  name: "Free entry for family",
  quantity: 10,
  price: 0,
  ticket_type_id:1,
  event_id: event12.id
)

ticket_12_2  = Ticket.create(
  name: "Strangers get tickets",
  quantity: 10,
  price: 12,
  ticket_type_id:2,
  event_id: event12.id
)

ticket_12_3  = Ticket.create(
  name: "Long time friends invited",
  quantity: nil,
  price: 0,
  ticket_type_id:3,
  event_id: event12.id
)

event13 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
long: nil,
lat: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "10:00:00 AM",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: hobby.id,
subtopic_id: hobby.id,
image: File.open('app/assets/images/hobbies.png')
)

ticket_13_1  = Ticket.create(
  name: "Free entry for family",
  quantity: 10,
  price: 0,
  ticket_type_id:1,
  event_id: event13.id
)

ticket_13_2  = Ticket.create(
  name: "Strangers get tickets",
  quantity: 10,
  price: 12,
  ticket_type_id:2,
  event_id: event13.id
)

ticket_13_3  = Ticket.create(
  name: "Long time friends invited",
  quantity: nil,
  price: 0,
  ticket_type_id:3,
  event_id: event13.id
)

event14 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
long: nil,
lat: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "10:00:00 AM",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: science.id,
subtopic_id: science.id,
image: File.open('app/assets/images/holiday.png')
)

ticket_14_1  = Ticket.create(
  name: "Free entry for family",
  quantity: 10,
  price: 0,
  ticket_type_id:1,
  event_id: event14.id
)

ticket_14_2  = Ticket.create(
  name: "Strangers get tickets",
  quantity: 10,
  price: 12,
  ticket_type_id:2,
  event_id: event1.id
)

ticket_14_3  = Ticket.create(
  name: "Long time friends invited",
  quantity: nil,
  price: 0,
  ticket_type_id:3,
  event_id: event14.id
)

event15 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
long: nil,
lat: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "10:00:00 AM",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: spirituality.id,
subtopic_id: spirituality.id,
image: File.open('app/assets/images/spirituality.jpg')
)

ticket_15_1  = Ticket.create(
  name: "Free entry for family",
  quantity: 10,
  price: 0,
  ticket_type_id:1,
  event_id: event15.id
)

ticket_15_2  = Ticket.create(
  name: "Strangers get tickets",
  quantity: 10,
  price: 12,
  ticket_type_id:2,
  event_id: event15.id
)

ticket_15_3  = Ticket.create(
  name: "Long time friends invited",
  quantity: nil,
  price: 0,
  ticket_type_id:3,
  event_id: event15.id
)

event16 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
long: nil,
lat: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "10:00:00 AM",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: homelife.id,
subtopic_id: homelife.id,
image: File.open('app/assets/images/home_lifestyle.png')
)

ticket_16_1  = Ticket.create(
  name: "Free entry for family",
  quantity: 10,
  price: 0,
  ticket_type_id:1,
  event_id: event16.id
)

ticket_16_2  = Ticket.create(
  name: "Strangers get tickets",
  quantity: 10,
  price: 12,
  ticket_type_id:2,
  event_id: event16.id
)

ticket_16_3  = Ticket.create(
  name: "Long time friends invited",
  quantity: nil,
  price: 0,
  ticket_type_id:3,
  event_id: event16.id
)

event17 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
long: nil,
lat: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "10:00:00 AM",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: travel.id,
subtopic_id: travel.id,
image: File.open('app/assets/images/travel_outdoor.jpg')
)

ticket_17_1  = Ticket.create(
  name: "Free entry for family",
  quantity: 10,
  price: 0,
  ticket_type_id:1,
  event_id: event17.id
)

ticket_17_2  = Ticket.create(
  name: "Strangers get tickets",
  quantity: 10,
  price: 12,
  ticket_type_id:2,
  event_id: event17.id
)

ticket_17_3  = Ticket.create(
  name: "Long time friends invited",
  quantity: nil,
  price: 0,
  ticket_type_id:3,
  event_id: event17.id
)

event18 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
long: nil,
lat: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "10:00:00 AM",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: holiday.id,
subtopic_id: holiday.id,
image: File.open('app/assets/images/holiday.png')
)

ticket_18_1  = Ticket.create(
  name: "Free entry for family",
  quantity: 10,
  price: 0,
  ticket_type_id:1,
  event_id: event18.id
)

ticket_18_2  = Ticket.create(
  name: "Strangers get tickets",
  quantity: 10,
  price: 12,
  ticket_type_id:2,
  event_id: event18.id
)

ticket_18_3  = Ticket.create(
  name: "Long time friends invited",
  quantity: nil,
  price: 0,
  ticket_type_id:3,
  event_id: event8.id
)

event19 = Event.create(
creater_id:test_user.id,
title: "Meet Lady gaga",
long: nil,
lat: nil,
online: nil,
adresse_line1: "587 MEACHAM AVE ELMONT",
start_date:"2017-12-25",
start_time:"8:00:00",
end_date: "2017-12-26",
end_time: "10:00:00 AM",
description: "This meeting is an opportunity to meet the great lady gaga",
image_url: nil,
topic_id: government.id,
subtopic_id: government.id,
image: File.open('app/assets/images/government.jpg')
)

ticket_19_1  = Ticket.create(
  name: "Free entry for family",
  quantity: 10,
  price: 0,
  ticket_type_id:1,
  event_id: event19.id
)

ticket_19_2  = Ticket.create(
  name: "Strangers get tickets",
  quantity: 10,
  price: 12,
  ticket_type_id:2,
  event_id: event19.id
)

ticket_19_3  = Ticket.create(
  name: "Long time friends invited",
  quantity: nil,
  price: 0,
  ticket_type_id:3,
  event_id: event19.id
)



end
