json.set! @post.id do
  json.extract! @post, :body, :created_at
  json.partial! 'api/users/user', user: @post.author
end
