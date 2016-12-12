# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Friend.destroy_all
Post.destroy_all


jcarver = User.create!(firstname:"Jason", lastname: "Somerville",
                    email:"jcarver@poker.com", password:"jason1",
                    birthday: Date.new(1987,4,15), gender: "male",
                    current_town: "New Jersey", home_town: "New Jersey",
                    relationship: "single", workplace: "Self-employed",
                    profilepic: File.open('app/assets/images/seed_img/jcarver.jpg')
                    )

jcarver.posts.create!(body:"enjoy your holidays everyone and I look forward to another full season of dirty basement bliss on @Twitch starting early January! #peace")
jcarver.posts.create!(body:"we are live grinding the Canadian @PokerStars streets come hang out!!")
jcarver.posts.create!(body:"huge turnout for Day 1A of our Run it Up Calgary $100K GTD NLH event @GreyEagleResort - 231 entrants w/ 4 levels left to reg! come on down!")
jcarver.posts.create!(body:"we are running it up")

sam = User.create!(firstname:"Samantha", lastname: "Abernathy",
                    email:"sam@poker.com", password:"sam123",
                    birthday: Date.new(1991, 5, 11), gender: "female",
                    current_town: "Atlanta",
                    relationship: "It's complicated", workplace: "Self-employed",
                    profilepic: File.open('app/assets/images/seed_img/samab.jpg')
                    )
#
sam.posts.create(body:"Hello!")
sam.posts.create(body:"Selfishly trying to convince dmoongirl to adopt a potbelly pig instead of a dog.")
sam.posts.create(body:"Chips Schmips. Felt like this day was never gonna end. Happy to be home w the snuggle cub")
sam.posts.create(body:"Mad how birds have all these bright feathers, but to attract humans all we have is a super-like option on Tinder.")
sam.posts.create(body:"When u reach that point in life where happy hour is a nap")
sam.posts.create(body:"Taking a giant [scary] leap today & turning on my read receipts for the first time. Excited about this create chapter of my life! ")

Friend.create(user1: jcarver.id, user2: sam.id, status: "pending")

dan = User.create!(firstname:"Dan", lastname: "Bilzerian",
                    email:"dan@poker.com", password:"dan123",
                    birthday: Date.new(1980, 12, 7), gender: "male",
                    current_town: "Las Vegas", home_town: "Tampa",
                    school: "University of Florida",
                    relationship: "married", workplace: "IG King",
                    profilepic: File.open('app/assets/images/seed_img/danbilz.jpeg')
                    )
#
dan.posts.create(body:"The bums will always lose")
dan.posts.create(body:"Just watched Leo's documentary Before The Flood, definitely worth seeing.  I'm not getting paid to promote it, just letting u know")
dan.posts.create(body:"Watching the election might be one of the best sweats ever.  I just bet 20k for kicks")
dan.posts.create(body:"Happiness is a warm gun")
dan.posts.create(body:"My team said to post more conservative things so we can get big money from brands")

Friend.create(user1: jcarver.id, user2: dan.id, status: "pending")
Friend.create(user1: dan.id, user2: sam.id, status: "active")

liv = User.create!(firstname:"Liv", lastname: "Boeree",
                    email:"liv@poker.com", password:"liv123",
                    birthday: Date.new(1984, 7, 18), gender: "female",
                    current_town: "Kent, England",
                    relationship: "single", workplace: "Iron Maiden",
                    profilepic: File.open('app/assets/images/seed_img/livboe.jpg')
                    )
#
liv.posts.create(body:"All this time I've just been living my life, completely unaware that my name is an anagram of I love beer.")
liv.posts.create(body:"My singing definitely isn't good enough to be given the credit for this..")
liv.posts.create(body:"t's always nice to bump into friends on your walk home")

oliver = User.create!(firstname:"Oliver", lastname: "Busquet",
                    email:"oliver@poker.com", password:"oliver",
                    birthday: Date.new(1981, 8, 22), gender: "male",
                    current_town: "New York City", school: "Cornell University",
                    relationship: "single", workplace: "WSOP",
                    profilepic: File.open('app/assets/images/seed_img/oliverb.jpeg')
                    )
#
oliver.posts.create(body:"I played w/ @catehall in 5k at bellagio and 4 all the haters who r waiting 4 her run good 2 end, ur probably gonna be waiting a long time")
oliver.posts.create(body:"Hey Nyugen, lil piece of advice: play tight for the rest of your life. You're gonna get paid off forever.....")
oliver.posts.create(body:"It is often these very traits (whether it be fear, insecurity, anger etc) that are essential motivators that have led to their success.")
oliver.posts.create(body:"It is so hard to fall in love with a person yet so easy to fall in love with a dog....")


vanessa = User.create!(firstname:"Vanessa", lastname: "Selbst",
                    email:"van@poker.com", password:"van123",
                    birthday: Date.new(1984, 7, 9), gender: "female",
                    current_town: "Brooklyn", school: "MIT",
                    relationship: "married", workplace: "DeucesCracked",
                    profilepic: File.open('app/assets/images/seed_img/vanessa.jpeg')
                    )
#
vanessa.posts.create(body:"Speaking of recent good reads by conservatives I don't agree with, I highly recommend Hillbilly Elegy. Well written and thought-provoking.")
vanessa.posts.create(body:"Great tourney, great cause. If you're in the Las Vegas area, don't miss it!")
vanessa.posts.create(body:"Goodbye, Greece. It was a beautiful romance, but it had to end. Back to real life now.")

fedor = User.create!(firstname:"Fedor", lastname: "Holz",
                    email:"fedor@poker.com", password:"fedor1",
                    birthday: Date.new(1993, 7, 22), gender: "male",
                    current_town: "Saarbrücken",
                    profilepic: File.open('app/assets/images/seed_img/fedor.jpeg')
                    )
#
fedor.posts.create(body:"I didn't expect how nice it feels to be home - there is always something create and beautiful to discover.")
fedor.posts.create(body:"Certain things capture your eye. But only pursue those that capture your heart.")
fedor.posts.create(body:"Final table in the highest online buyin ever. I'll just play and have fun ✌️")
fedor.posts.create(body:"Arrived safe and sound in Barcelona. Beach > casino this time...")


nanonoko = User.create!(firstname:"Randy", lastname: "Lew",
                    email:"randy@poker.com", password:"randy1",
                    birthday: Date.new(1985, 7, 3), gender: "male",
                    relationship: "it's complicated",
                    current_town: "Sacramento",
                    workplace: "TeamLiquid",
                    profilepic: File.open('app/assets/images/seed_img/nanonoko.jpeg')
                    )
#
nanonoko.posts.create(body:"After burning the kitchen down in Overcooked over and over with @celina_lin …10min later we got unburnt real food")
nanonoko.posts.create(body:"Vending machine ramen in Japan was so good! Funny way of ordering and you see random hands come out to give you the food")
nanonoko.posts.create(body:"Woohoo just 3-0 the 3rd match so so far I’m 2-1 in sets!")
nanonoko.posts.create(body:"Too lazy to type my own tweet so on my way to the #GPLFinals")
nanonoko.posts.create(body:"Was intense and fun playing poker in the C U B E. We didn’t win but we tried our best.")

celina = User.create!(firstname:"Celina", lastname: "Lin",
                    email:"celina@poker.com", password:"celina1",
                    birthday: Date.new(1982, 5, 1), gender: "female",
                    workplace: "PokerStars",
                    profilepic: File.open('app/assets/images/seed_img/celinalin.jpeg')
                    )
#
celina.posts.create(body:"Playing the @PokerStarsAPPT #Melbourne main event today! Looks like it's gonna get over 500 entrants, nice prize pool up for grabs.")
celina.posts.create(body:"Had a blissful 2hr afternoon massage, now heading in for the deepstack event @PokerStarsMacau #2016ACOP see u all there!")
celina.posts.create(body:"Sat down in the #2016ACOP ME @PokerStarsMacau , the structure doesn't get much better than this. 60mins 1st 4 levels & 90mins thereafter.")
celina.posts.create(body:"Jet lagged so bad, just waking up now after sleeping all day. What am I gonna do rest of the night?!?! It's 11pm in Vegas 😓")
celina.posts.create(body:"Missed out on seeing the #AntelopeCanyon last few trips to #Vegas , not this time!")
celina.posts.create(body:"Courage doesn't mean you don't get afraid. Courage means you don't let fear stop you.")


elky = User.create!(firstname:"Bertrand", lastname: "Grospellier",
                    email:"bert@poker.com", password:"bert12",
                    birthday: Date.new(1981, 2, 8), gender: "male",
                    current_town: "London",
                    home_town: "Melun",
                    relationship: "married", workplace: "PokerStars",
                    profilepic: File.open('app/assets/images/seed_img/bertrand.jpeg')
                    )
#
staples = User.create!(firstname:"Jaime", lastname: "Staples",
                    email:"jaime@poker.com", password:"jaime1",
                    birthday: Date.new(1991, 5, 27), gender: "male",
                    current_town: "Alberta",
                    relationship: "in a relationship", workplace: "PokerStaples",
                    profilepic: File.open('app/assets/images/seed_img/staples.jpeg')
                    )
#
staples.posts.create(body:"Damn fun day! Tomorrow the hype lives on. See you guys there :)")
staples.posts.create(body:"Spot of the day: $215 bounty I open, call cutoff, smallblind, bigblind. Flop check around. Turn FU bets 60%, fold/I call/fold. River spot???")
staples.posts.create(body:"Super pumped for the Sunday grind. A little coffee and we are good to go 😀")
staples.posts.create(body:"GG guys thanks for watching the stream today :) Thats a memorable one with a BB $22 win :) :) $3868 and dreams. Cya tomorrow #twitch #poker")
staples.posts.create(body:"Yo Facebook, I'm flattered, but this is not my life XD")


staples = User.create!(firstname:"Daniel", lastname: "Negreanu",
                    email:"daniel@poker.com", password:"daniel",
                    birthday: Date.new(1974, 7, 26), gender: "male",
                    current_town: "Toronto",
                    relationship: "married", workplace: "High Stakes",
                    profilepic: File.open('app/assets/images/seed_img/negrea.jpeg')
                    )
#
rupert = User.create!(firstname:"Rupert", lastname: "Elder",
                    email:"rupert@poker.com", password:"rupert",
                    birthday: Date.new(1987, 10, 5), gender: "male",
                    current_town: "St Edmunds",
                    school: "University of Warwick",
                    relationship: "single", workplace: "Poker Tour",
                    profilepic: File.open('app/assets/images/seed_img/rupert.jpeg')
                    )
#
