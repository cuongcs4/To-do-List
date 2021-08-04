import axios from "axios";
// uar chua cai axios a
// :V 
// clm cai di thg lone :v k can huy
// split terminal ra
// nos goi y :v,
// a co r ma wtf
// thì import có mà dkm
// wwtf
const baseURL = 'https://api-nodejs-todolist.herokuapp.com/';

const createClient = (baseURL) => {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTA3ZGI0MDM4ZTdhNzAwMTcyMmE5NjAiLCJpYXQiOjE2Mjc5MDQ4MzJ9.voZzDJElzFQu_uW9dyvuHR-0250p3dOHuuSYxdydtvc`
    },
  });
};

export const fetcher = (options) => {
  const onSuccess = response => response;
  const onError = error => Promise.reject(error.response || error.message);
  const client = createClient(baseURL);
  return client(options).then(onSuccess).catch(onError);
}

export default fetcher;