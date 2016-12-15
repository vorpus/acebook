json.extract! friend, :id, :user1, :user2, :status
json.friender do
  json.partial! 'api/users/user', user: friend.friender
end
json.friendee do
  json.partial! 'api/users/user', user: friend.friendee
end
