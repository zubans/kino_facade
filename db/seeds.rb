# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Social.create(
    [
        {href: "#", css_class: "facebook", description: "facebook", active: true},
        {href: "#", css_class: "twitter", description: "twitter", active: true},
        {href: "#", css_class: "instagram", description: "instagram", active: true},
        {href: "#", css_class: "youtube", description: "youtube", active: true},
        {href: "#", css_class: "vk", description: "vkontakte", active: true},
        ]
    )
