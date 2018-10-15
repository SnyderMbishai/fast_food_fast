const baseUrl = "http://0.0.0.0:5000/api/v2";

const getData = (url, accessToken) => {
  return fetch(`${baseUrl}${url}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json"
    }
  });
};

const postData = (url, data, accessToken = null) => {
  return fetch(`${baseUrl}${url}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json"
    }
  });
};

const putData = (url, accessToken, data = null) => {
  return fetch(`${baseUrl}${url}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json"
    }
  });
};

const deleteData = (url, accessToken) => {
  return fetch(`${baseUrl}${url}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json"
    }
  });
};

export { getData, postData, putData, deleteData };
