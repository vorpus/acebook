export function createUser (user) {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user: user }
  });
}

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


// user = {"firstname": "test1", "lastname": "test2", "email": "test2", "password": "123qwe", "birthday": new Date(), "gender":"male"}
// user = {"email": "testing", "password": "123qwe"}
