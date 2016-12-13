# json.array! @posts do |post|
#   json.body post.body
#   json.author do
#     json.partial! 'api/users/user', user: post.author
#   end
# end

@posts.each do |post|
  json.set! post.id do
    json.partial! 'api/posts/post', post: post
  end
end
