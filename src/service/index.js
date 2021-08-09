import axios from "axios";
const baseURL = 'https://api-nodejs-todolist.herokuapp.com/';



export const getToken = async (email, password) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    url: 'https://api-nodejs-todolist.herokuapp.com/user/login',
    data: {
      email,
      password
    }
  }
  const data = await axios(options).then(res => res).catch(error => error.response)
  const accessToken = data.data.token
  if (accessToken)
    sessionStorage.setItem("tdl-token", accessToken)
  return data
}

export const signup = async (info) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    url: 'https://api-nodejs-todolist.herokuapp.com/user/register',
    data: {
      name: info.name,
      email: info.email,
      password: info.password,
      age: info.age
    }
  }
  const data = await axios(options)
    .then(res => res)
    .catch(error => error.response)
  const accessToken = data.data.token
  if (accessToken)
    sessionStorage.setItem("tdl-token", accessToken)
  return data
  // if (data) {
  //   const accessToken = data.data.token
  //   sessionStorage.setItem("tdl-token", accessToken)
  // }
}

export const createClient = () => {
  const accessToken = sessionStorage.getItem('tdl-token')
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken} `
    },
  });
};

export const fetcher = (options) => {
  const onSuccess = response => response;
  const onError = error => Promise.reject(error.response || error.message);
  const client = createClient();
  return client(options).then(onSuccess).catch(onError);
}