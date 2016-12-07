json.array! @posts do |post|
  json.body post.body
  json.author do
    json.partial! 'api/users/user', user: post.author
  end
end
