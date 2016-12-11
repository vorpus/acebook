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
  if @post.likes
    json.likes do
      @post.likes.each do |like|
        json.set! like.id do
          json.likeId like.id
          json.userId like.user.id
          json.userFname like.user.firstname
          json.userLname like.user.lastname
        end
      end
    end
  end
end
