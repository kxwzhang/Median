# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Generate data with Faker
require 'faker'

# Clear seeded data upon initialize
User.destroy_all
Story.destroy_all

# Users 
User.create!(username: 'kehwin', email: 'kehwin@aa.io', password: '123456')
User.create!(username: 'winterfred', email: 'freddy@yahoo.com', password: '000000')
User.create!(username: 'bokchoy', email: 'bchoy@gmail.com', password: 'lettuceman')
User.create!(username: 'elonmusk', email: 'em@tesla.com', password: 'spacexmachine')
User.create!(username: 'ashketchum', email: 'pokemongo@pk.co', password: 'pikachu123')
User.create!(username: 'fastnfurious', email: 'rushhour@needspeed.com', password: 'slowturtle1')
User.create!(username: 'teemo', email: 'devilyordle@lol.com', password: '1v9player')
User.create!(username: 'baam', email: 'viole@tog.com', password: 'climbthetower')
User.create!(username: 'madmax', email: 'mmm@gmail.com', password: '101010')
User.create!(username: 'notaname', email: 'notamail@nomail.com', password: 'superlongpassword')

# Stories
Story.create!(title: 'I Drank A Gallon Of Water A Day For Better Skin', 
    subtitle: 'Here is what happened...',
    body: Faker::Lorem.paragraph(sentence_count: 10, supplemental: false, random_sentences_to_add: 10),
    author_id: rand(1..10))
Story.create!(title: '7 Things I Wish I Knew Before I Got a Tesla Model 3', 
    subtitle: 'No one tells you about these!',
    body: Faker::Lorem.paragraph(sentence_count: 10, supplemental: false, random_sentences_to_add: 10),
    author_id: rand(1..10))
Story.create!(title: 'How to Avoid a Deadly Mix of Covid-19 and the Flu',
    subtitle: 'There’s some potentially good news for the United States',g
    body: Faker::Lorem.paragraph(sentence_count: 10, supplemental: false, random_sentences_to_add: 10),
    author_id: rand(1..10))