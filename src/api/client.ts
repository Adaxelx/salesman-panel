import { tokenKey, userKey } from 'constants/localStorageKeys';

export function client(endpoint: string, { body, ...customConfig }: any = {}) {
  const token = window.localStorage.getItem(tokenKey);
  const headers: any = { 'content-type': 'application/json' };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  return window
    .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
    .then(async response => {
      if (response.status === 401) {
        logout();
        window.location.assign(window.location as unknown as URL);
        return;
      }
      if (response.ok) {
        return await response.json();
      } else {
        const errorMessage = await response.text();
        return Promise.reject(new Error(errorMessage));
      }
    });
}

function logout() {
  window.localStorage.removeItem(tokenKey);
  window.localStorage.removeItem(userKey);
}
