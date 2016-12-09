//USER FUNCS

export function createUser (user) {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user: user }
  });
}

export function getUser (userId) {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
}

//SESSION FUNCS

export function loginUser (user) {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user: user }
  });
}

export function logoutUser () {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
}

//POST FUNCS

export function getPosts (userId) {
  if (userId) {
    return $.ajax({
      method: 'GET',
      url: `/api/users/${userId}/posts`
    });
  } else {
    return $.ajax({
      method: 'GET',
      url: '/api/posts'
    });
  }
}

export function createPost (post) {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: { post: post }
  });
}

//FRIEND FUNCS

export function addFriend(friendId) {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${friendId}/friends`
  });
}

export function findFriend(friendId) {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${friendId}/friends`
  });
}


// user = {"firstname": "test1", "lastname": "test2", "email": "test2", "password": "123qwe", "birthday": new Date(), "gender":"male"}
// user = {"email": "testing", "password": "123qwe"}
