function handleResponse (res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res)
    }
}

export const login = ({ action, data }) => {
  return fetch(`https://dpo.emiit.ru/_wt/auth/login`, {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ action, data })
  })
  .then(res => handleResponse(res));
};
