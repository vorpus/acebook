# Acebook

![acebook](/docs/demo-pics/logo.png "acebook")

[LIVE](https://spbk.herokuapp.com/)

[Project proposal circa 12/3/16](docs/README.md)

Acebook is a clone of Facebook built using Ruby, Rails, React, Redux, and PostgreSQL.
The purpose of this project is to solidify what we learned over the past several months at
App Academy NYC. The clone features fake profiles from professional poker players.

![acebook](/docs/demo-pics/login.png)

## Features

### Form validation
The user's form inputs are validated on both the front-end and back-end. Validations check for password length, unique email addresses, and more. Passwords are hashed using [BCrypt](https://en.wikipedia.org/wiki/Bcrypt) before being stored on the server.

![acebook](/docs/demo-pics/auth-error.gif)

### Friend requests
Users are notified of friend requests in the header pane and can accept or reject the requests without leaving the page the user is currently browsing. Friendships are mainted with a join table that includes a status column - users are not allowed to view posts belonging to users with whom they are not yet friends.
![acebook](/docs/demo-pics/friend-accept.gif)

### News feed & infinite scroll
A user's news feed is curated by only displaying posts belonging to that user's friends. These posts are fetched using several chained ActiveRecord queries.
Pagination is implemented with the [Kaminari](https://github.com/amatsuda/kaminari) gem. jQuery events are used to create infinite scroll.

![acebook](/docs/demo-pics/infinite-scroll.gif)

### Real-time search
The header searchbar listens for change events and performs searches as the user inputs their query. Searches are case-insensitive and conducted using ActiveRecord queries and regular expressions.
![acebook](/docs/demo-pics/rts.gif)

### Likes and comments
Comments and likes can be added and removed from posts with a single keystroke/click. Comments have an 'enter/return' listener to know when to submit the form.
![acebook](/docs/demo-pics/like-comment.gif)

### Post editing
Posts can be edited and removed with an action pane available to the author of the post. The frontend accomplishes this during render by comparing the post author and the session user.
![acebook](/docs/demo-pics/post-edit.gif)

### Photo upload
Photo upload uses the [paperclip gem](https://github.com/thoughtbot/paperclip) to manage attachments. Uploaded pictures are stored in an [Amazon AWS S3](https://aws.amazon.com/) server.

![acebook](/docs/demo-pics/post-photo-upload.gif)
Attachments can be associated with both users (cover photo, profile picture) and posts (post attachment).
![acebook](/docs/demo-pics/profile-pic-update.gif)

### Responsive layout
CSS is used to make the app accessible on devices with both and small displays.
![acebook](/docs/demo-pics/responsive-size.gif)

## Future features
- [ ] 'Like' reactions - in addition to liking a post, users will be able to convey 'love', 'laugh', and 'sad' emotions
- [ ] Messenger - real time chat between friends using websockets
- [ ] Photo albums - to show off a user's latest vegas vacation
