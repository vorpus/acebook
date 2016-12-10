json.set! @post.id do
  json.extract! @post, :body, :created_at
  json.author do
    json.partial! 'api/users/user', user: @post.author
  end
  if @post.tagged
    json.tagged do
      json.partial! 'api/users/user', user: @post.tagged
    end
  end
end
