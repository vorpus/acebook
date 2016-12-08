json.extract! @post, :author, :body
json.email @post.author.email
