# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Generate data with Faker
require 'faker'
require 'open-uri'

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
# user9 =User.create!(username: 'madmax', email: 'mmm@gmail.com', password: '101010')
# user10 =User.create!(username: 'notaname', email: 'notamail@nomail.com', password: 'superlongpassword')

file1 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/1.jpg')
file2 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/2.jpg')
file3 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/3.jpg')
file4 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/4.jpg')
file5 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/5.jpg')
file6 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/6.jpg')
file7 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/7.jpg')
file8 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/8.jpg')
file9 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/9.jpg')
file10 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/10.jpg')
file11 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/11.jpg')
file12 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/12.jpg')
file13 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/13.jpg')
file14 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/14.jpg')
file15 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/15.jpg')
file16 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/16.jpg')
file17 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/17.jpg')
# file18 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/18.jpg')
# file19 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/19.jpg')
# file20 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/20.jpg')
# file21 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/21.jp'g)
# file22 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/22.jpg')
# file23 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/23.jpg')
# file24 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/24.jpg')
# file25 = open('https://median-stories-dev.s3-us-west-1.amazonaws.com/25.jpg')

# Stories
story1 = Story.create!(title: 'I Drank A Gallon Of Water A Day For Better Skin', 
    subtitle: 'Here is what happened...',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user1.id)
story1.photo.attach(io: file1, filename: '1.jpg')
story2 = Story.create!(title: '9 Things I Wish I Knew Before I Got a Tesla Model 3', 
    subtitle: 'No one tells you about these!',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user1.id)
story2.photo.attach(io: file2, filename: '2.jpg')
story3 = Story.create!(title: 'How to Avoid a Deadly Mix of Coronavirus and the Flu',
    subtitle: 'There’s some potentially good news for the United States',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user2.id)
story3.photo.attach(io: file3, filename: '3.jpg')
story4 = Story.create!(title: 'Understanding Javascript Selectors With and Without Reselect',
    subtitle: 'These tricks can save you hours',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user2.id)
story4.photo.attach(io: file4, filename: '4.jpg')
story5 = Story.create!(title: '8 Life Lessons I’ve Learned at 50-Something That I Wish I’d Known at 20-Something',
    subtitle: 'These tricks can save you hours',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user3.id)
story5.photo.attach(io: file5, filename: '5.jpg')
story6 = Story.create!(title: 'My Summer Internship in Silicon Valley',
    subtitle: 'The Valley is here to stay',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user3.id)
story6.photo.attach(io: file6, filename: '6.jpg')
story7 = Story.create!(title: 'Mastering data structures for interviews — Doubly linked lists',
    subtitle: 'Impress recruiters with this one computer science concept',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user4.id)
story7.photo.attach(io: file7, filename: '7.jpg')
story8 = Story.create!(title: 'How to Identify a Smart Person in 3 Minutes',
    subtitle: 'These two-question combo can help you look past the validation-seekers',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user4.id)
story8.photo.attach(io: file8, filename: '8.jpg')
story9 = Story.create!(title: 'To Become Extremely Productive, Be like Elon Musk',
    subtitle: 'If you want to work more efficiently, here’s what you need to do.',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user5.id)
story9.photo.attach(io: file9, filename: '9.jpg')
story10 = Story.create!(title: 'Understanding Currying in JavaScript',
    subtitle: 'Short Guide to Currying',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user5.id)
story10.photo.attach(io: file10, filename: '10.jpg')
story11 = Story.create!(title: 'How Arcades Have Evolved To Survive',
    subtitle: 'You’d be forgiven for thinking arcades went the way of payphones.',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user6.id)
story11.photo.attach(io: file11, filename: '11.jpg')
story12 = Story.create!(title: 'Eliminating Superfluous Elements in Worldbuilding',
    subtitle: 'Or, How to Ensure Your Setting is as Focused as it is Awesome',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user6.id)
story12.photo.attach(io: file12, filename: '12.jpg')
story13 = Story.create!(title: 'Do All Things with Joy',
    subtitle: 'I just felt like writing about guitarist today, so what the heck. Let’s do this.',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user7.id)
story13.photo.attach(io: file13, filename: '13.jpg')
story14 = Story.create!(title: 'Hamilton Saved Me From My Grief',
    subtitle: 'More than just a musical, Hamilton helped me to emerge from the darkness of my life.',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user7.id)
story14.photo.attach(io: file14, filename: '14.jpg')
story15 = Story.create!(title: 'This Is Your Brain On Music',
    subtitle: 'Music is an emotive language that moves us through time and space',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user8.id)
story15.photo.attach(io: file15, filename: '15.jpg')
story16 = Story.create!(title: 'How a Buddhist Monk Taught Me to Stop Overthinking',
    subtitle: 'It all comes down to a simple two-word question',
    body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
    author_id: user8.id)
story16.photo.attach(io: file16, filename: '16.jpg')
# story17 = Story.create!(title: 'How Three College Students Made $600,000 in 24 Hours',
#     subtitle: 'A simple pricing trick led to thousands of orders',
#     body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
#     author_id: user9.id)
# story17.photo.attach(io: file17, filename: '17.jpg')
# story18 = Story.create!(title: 'Dark Side Of a Reddit Confession',
#     subtitle: 'A Reddit Confession Nearly Solved a 50-year-old Cold Case',
#     body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
#     author_id: user9.id)
# story18.photo.attach(io: file18, filename: '18.jpg')
# story19 = Story.create!(title: 'From Programmer to Billionaire at Age 20',
#     subtitle: 'The story of Dio Diva, Indonesia’s youngest tech billionaire',
#     body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
#     author_id: user10.id)
# story19.photo.attach(io: file19, filename: '19.jpg')
# story20 = Story.create!(title: 'Stop Using If-Else Statements',
#     subtitle: 'Write code without them',
#     body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
#     author_id: user10.id)
# story20.photo.attach(io: file20, filename: '20.jpg')
# story21 = Story.create!(title: 'Why You Should Never Send Your CV via Gmail',
#     subtitle: 'You could be getting your identity stolen.',
#     body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
#     author_id: user2.id)
# story21.photo.attach(io: file21, filename: '21.jpg')
# story22 = Story.create!(title: 'New iPhone 24 Leaks',
#     subtitle: 'Some details to hold you over until September!',
#     body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
#     author_id: user2.id)
# story22.photo.attach(io: file22, filename: '22.jpg')
# story23 = Story.create!(title: 'Fanstagram Turned a User’s Chirp Into a Feature Overnight',
#     subtitle: 'It moved fast and didn’t break anything',
#     body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
#     author_id: user3.id)
# story23.photo.attach(io: file23, filename: '23.jpg')
# story24 = Story.create!(title: '5 VS Code Extensions That Make You Want To Keep Coding Forever',
#     subtitle: 'Coding made simple.',
#     body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
#     author_id: user3.id)
# story24.photo.attach(io: file24, filename: '24.jpg')
# story25 = Story.create!(title: 'How To Respond To Recruiters On Linkedin',
#     subtitle: 'A how-to guide that will ensure you will be attending the next interview session.',
#     body: Faker::Lorem.paragraph(sentence_count: 60, supplemental: false, random_sentences_to_add: 60),
#     author_id: user4.id)
# story25.photo.attach(io: file25, filename: '25.jpg')