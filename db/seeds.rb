# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

@admin = User.create!(username: 'hummingbirds', email: 'hummingbirds@email.com', image_url: 'test.jpg', password: '123456')

puts "#{User.count} users created!"