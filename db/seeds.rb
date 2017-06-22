# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(
 email: "guest",
 password: "password"
)

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
