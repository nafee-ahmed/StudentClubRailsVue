import { useAuthStore } from "../stores/AuthStore";

export const fetchWrapper = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  patch: request("PATCH"),
  delete: request("DELETE"),
};

function request(method) {
  return (url, body) => {
    const requestOptions = {
      method,
      headers: getAuthHeader(url),
    };
    if (body) {
      requestOptions.headers["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(body);
    }
    return fetch(url, requestOptions).then(handleErrorResponse);
  };
}

// helper functions

function getAuthHeader(url) {
  // return auth header with jwt if user is logged in and request is to the api url
  const { token } = useAuthStore();
  if (token) {
    return { Authorization: token };
  } else {
    return {};
  }
}

function handleErrorResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const { user, logout } = useAuthStore();
      if ([401, 403].includes(response.status) && user) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        logout();
      }
      console.log(data);
      throw new Error(JSON.stringify(data));
    }

    return data;
  });
}
