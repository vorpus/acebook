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

export function updateUser (data) {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/_`,
    data,
    processData: false,
    contentType: false,
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

export function getPosts (userId, page) {
  if (userId) {
    return $.ajax({
      method: 'GET',
      url: `/api/users/${userId}/posts`,
      data: {page: page}
    });
  } else {
    return $.ajax({
      method: 'GET',
      url: '/api/posts',
      data: {page: page}
    });
  }
}

export function createPost (post, tagged_id) {
  if (tagged_id) {
    return $.ajax({
      method: 'POST',
      url: `/api/users/${tagged_id}/posts`,
      data: post,
      processData: false,
      contentType: false,
    });
  } else {
    return $.ajax({
      method: 'POST',
      url: '/api/posts',
      data: post,
      processData: false,
      contentType: false,
    });
  }
}

export function fetchPost (postId) {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`,
  })
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

export function findFriendRequests() {
  return $.ajax({
    method: 'GET',
    url: '/api/friends'
  });
}

export function removeFriend(friendshipId) {
  return $.ajax({
    method: 'DELETE',
    url: `api/friends/${friendshipId}`
  });
}

export function acceptFriend(friendshipId) {
  return $.ajax({
    method: 'PATCH',
    url: `api/friends/${friendshipId}`
  });
}


//LIKE FUNCS
export function likePost (postId) {
  return $.ajax({
    method: 'POST',
    url: `api/posts/${postId}/likes`
  });
}

export function deleteLike (likeId) {
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${likeId}`
  });
}

//COMMENT FUNCS
export function addComment (postId, comment) {
  return $.ajax({
    method: 'POST',
    url: `api/posts/${postId}/comments`,
    data: { comment: comment }
  });
}

export function getComments (postId) {
  return $.ajax({
    method: 'GET',
    url: `api/posts/${postId}/comments`
  });
}

export function deleteComment (commentId) {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${commentId}`
  });
}

// user = {"firstname": "test1", "lastname": "test2", "email": "test2", "password": "123qwe", "birthday": new Date(), "gender":"male"}
// user = {"email": "testing", "password": "123qwe"}
