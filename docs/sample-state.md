```js
{
  currentUser: {
    id: 1,
    username: "current-username1"
  },
  forms: {
    errors: []
  },
  posts: {
    1: {
      body: "hello world!",
      author_id: 1,
      tag_id: 3
    }
  },
  comments: {
    1: {
      body: "hi to you too",
      post_id: 1,
      author_id: 1
    }
  },
  friendships: {
    1: {
      user1: 1,
      user2: 2,
      status: "friends"
    },
    2: {
      user1: 1,
      user2: 4,
      status: "pending"
    }
  },
  likes: {
    1: {
      user_id: 1,
      likeable_id: 2
    }
  }
}
```
