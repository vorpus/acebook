# json.array! @posts do |post|
#   json.body post.body
#   json.author do
#     json.partial! 'api/users/user', user: post.author
#   end
# end

@posts.each do |post|
  json.set! post.id do
    json.extract! post, :body, :created_at
    json.partial! 'api/users/user', user: post.author
  end
end
