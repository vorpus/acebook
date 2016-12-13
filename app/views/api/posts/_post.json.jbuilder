json.extract! post, :id, :body, :created_at
if post.image.original_filename
  json.image asset_path(post.image)
end
json.author do
  json.partial! 'api/users/user', user: post.author
end
if post.tagged
  json.tagged do
    json.partial! 'api/users/user', user: post.tagged
  end
end
if post.likes
  json.likes do
    post.likes.each do |like|
      json.set! like.id do
        json.likeId like.id
        json.userId like.user.id
        json.userFname like.user.firstname
        json.userLname like.user.lastname
      end
    end
  end
end
if post.comments
  json.comments do
    post.comments.each do |comment|
      json.set! comment.id do
        json.partial! 'api/comments/comment', comment: comment
        json.authorid comment.author.id
        json.authorpic comment.author.profilepic.url
        json.authorf comment.author.firstname
        json.authorl comment.author.lastname
      end
    end
  end
end
