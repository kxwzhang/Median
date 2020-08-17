# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Clear seeded data upon initialize
User.destroy_all

# Users 
User.create(username: 'kehwin', email: 'winnersonly@aa.io', password: '123456')
User.create(username: 'winterfred', email: 'freddy@yahoo.com', password: '000000')
User.create(username: 'bokchoy', email: 'bchoy@gmail.com', password: 'lettuceman')
User.create(username: 'elonmusk', email: 'em@tesla.com', password: 'spacexmachine')
User.create(username: 'ashketchum', email: 'pokemongo@pk.co', password: 'pikachu123')
User.create(username: 'fastnfurious', email: 'rushhour@needspeed.com', password: 'slowturtle1')
User.create(username: 'teemo', email: 'devilyordle@lol.com', password: '1v9player')
User.create(username: 'baam', email: 'viole@tog.com', password: 'climbthetower')
User.create(username: 'madmax', email: 'mmm@gmail.com', password: '101010')
User.create(username: 'notaname', email: 'notamail@nomail.com', password: 'superlongpassword')