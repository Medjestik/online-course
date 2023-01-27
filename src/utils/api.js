function handleResponse (res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res)
    }
}

export const registration = (user) => {
  return fetch(`https://online-api.emiit.ru/_wt/auth/action/register`, {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ lastname: user.lastname, firstname: user.firstname, middlename: user.middlename, email: user.mail, password: user.password })
  })
  .then(res => handleResponse(res));
};
