# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:id/friendships`
  - all friends of a user

### Session

- `POST /api/session`
- `DELETE /api/session`

### Posts

- `GET /api/posts`
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`
- `GET /api/posts/:id/comments`
  - all comments for a given post
- `GET /api/posts/:id/likes`
  - all likes for a given post
- `GET /api/posts/:id/tags`
  - all tagged users for a given post

### Comments

- `POST /api/comments`
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id`
- `GET /api/comments/:id/likes`
  - all likes for a given comment


### Friendships

- `GET /api/friendships`
- `POST /api/friendships`
- `PATCH /api/friendships/:id`
  - used to accept friendships
- `DELETE /api/friendships/:id`

### Likes

- `GET /api/likes`
- `POST /api/likes`
- `DELETE /api/likes/:id`
