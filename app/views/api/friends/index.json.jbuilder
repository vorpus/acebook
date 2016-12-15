@friends.each do |friend|
  json.set! friend.user1 do
    json.partial! 'api/friends/friend', friend: friend
  end
end
