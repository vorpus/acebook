json.extract! @post, :author, :body, :created_at, :id
json.email @post.author.email
