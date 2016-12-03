# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null
sex             | string    | not null
birthday        | date      | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

profile pic URL? cover photo URL?
has_many posts, comments, friendships, likes

## post
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
tag_id      | integer   | not null, foreign key (references users), indexed

belongs_to user
has_many comments, likes, tags

## comment
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
post_id     | integer   | not null, foreign key (references posts), indexed
author_id   | integer   | not null, foreign key (references users), indexed

belongs_to user
has_many likes

## friendships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user1       | integer   | not null, foreign key (references users), indexed
user2       | integer   | not null, foreign key (references users), indexed
status      | string    | "friends", "pending" (user2 not accepted yet), null

belongs_to user

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
likeable_id | integer   | not null, foreign key (references likeable [post & comment polymorphic]), indexed

belongs_to user, likeable
