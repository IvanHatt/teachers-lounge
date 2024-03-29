/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { tokenKey } from "config/default.json";

axios.defaults.headers.common["x-auth-token"] = localStorage.getItem(tokenKey);

axios.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
