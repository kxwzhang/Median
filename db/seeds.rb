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
user1 =User.create!(username: 'kehwin', email: 'kehwin@aa.io', password: '123456')
user2 =User.create!(username: 'winterfred', email: 'freddy@yahoo.com', password: '000000')
user3 =User.create!(username: 'bokchoy', email: 'bchoy@gmail.com', password: 'lettuceman')
user4 =User.create!(username: 'elonmusk', email: 'em@tesla.com', password: 'spacexmachine')
user5 =User.create!(username: 'ashketchum', email: 'pokemongo@pk.co', password: 'pikachu123')
user6 =User.create!(username: 'fastnfurious', email: 'rushhour@needspeed.com', password: 'slowturtle1')
user7 =User.create!(username: 'teemo', email: 'devilyordle@lol.com', password: '1v9player')
user8 =User.create!(username: 'baam', email: 'viole@tog.com', password: 'climbthetower')
user9 =User.create!(username: 'madmax', email: 'mmm@gmail.com', password: '101010')
user10 =User.create!(username: 'notaname', email: 'notamail@nomail.com', password: 'superlongpassword')

# Stories
Story.create!(title: 'I Drank A Gallon Of Water A Day For Better Skin', 
    subtitle: 'Here is what happened...',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user1.id)
Story.create!(title: '9 Things I Wish I Knew Before I Got a Tesla Model 3', 
    subtitle: 'No one tells you about these!',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user1.id)
Story.create!(title: 'How to Avoid a Deadly Mix of Coronavirus and the Flu',
    subtitle: 'There’s some potentially good news for the United States',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user2.id)
Story.create!(title: 'Understanding Javascript Selectors With and Without Reselect',
    subtitle: 'These tricks can save you hours',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user2.id)
Story.create!(title: '8 Life Lessons I’ve Learned at 50-Something That I Wish I’d Known at 20-Something',
    subtitle: 'These tricks can save you hours',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user3.id)
Story.create!(title: 'My Summer Internship in Silicon Valley',
    subtitle: 'The Valley is here to stay',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user3.id)
Story.create!(title: 'Mastering data structures for interviews — Doubly linked lists',
    subtitle: 'Impress recruiters with this one computer science concept',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user4.id)
Story.create!(title: 'How to Identify a Smart Person in 3 Minutes',
    subtitle: 'These two-question combo can help you look past the validation-seekers',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user4.id)
Story.create!(title: 'To Become Extremely Productive, Be like Elon Musk',
    subtitle: 'If you want to work more efficiently, here’s what you need to do.',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user5.id)
Story.create!(title: 'Understanding Currying in JavaScript',
    subtitle: 'Short Guide to Currying',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user5.id)
Story.create!(title: 'How Arcades Have Evolved To Survive',
    subtitle: 'You’d be forgiven for thinking arcades went the way of payphones.',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user6.id)
Story.create!(title: 'Eliminating Superfluous Elements in Worldbuilding',
    subtitle: 'Or, How to Ensure Your Setting is as Focused as it is Awesome',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user6.id)
Story.create!(title: 'Do All Things with Joy',
    subtitle: 'I just felt like writing about guitarist today, so what the heck. Let’s do this.',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user7.id)
Story.create!(title: 'Hamilton Saved Me From My Grief',
    subtitle: 'More than just a musical, Hamilton helped me to emerge from the darkness of my life.',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user7.id)
Story.create!(title: 'This Is Your Brain On Music',
    subtitle: 'Music is an emotive language that moves us through time and space',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user8.id)
Story.create!(title: 'How a Buddhist Monk Taught Me to Stop Overthinking',
    subtitle: 'It all comes down to a simple two-word question',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user8.id)
Story.create!(title: 'How Three College Students Made $600,000 in 24 Hours',
    subtitle: 'A simple pricing trick led to thousands of orders',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user9.id)
Story.create!(title: 'Dark Side Of a Reddit Confession',
    subtitle: 'A Reddit Confession Nearly Solved a 50-year-old Cold Case',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user9.id)
Story.create!(title: 'From Programmer to Billionaire at Age 20',
    subtitle: 'The story of Dio Diva, Indonesia’s youngest tech billionaire',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user10.id)
Story.create!(title: 'Stop Using If-Else Statements',
    subtitle: 'Write code without them',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user10.id)
Story.create!(title: 'Why You Should Never Send Your CV via Gmail',
    subtitle: 'You could be getting your identity stolen.',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user2.id)
Story.create!(title: 'New iPhone 24 Leaks',
    subtitle: 'Some details to hold you over until September!',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user2.id)
Story.create!(title: 'Fanstagram Turned a User’s Chirp Into a Feature Overnight',
    subtitle: 'It moved fast and didn’t break anything',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user3.id)
Story.create!(title: '5 VS Code Extensions That Make You Want To Keep Coding Forever',
    subtitle: 'Coding made simple.',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user3.id)
Story.create!(title: 'How To Respond To Recruiters On Linkedin',
    subtitle: 'A how-to guide that will ensure you will be attending the next interview session.',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user4.id)