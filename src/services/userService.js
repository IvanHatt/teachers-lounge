/* eslint-disable import/no-anonymous-default-export */
import http from "services/httpService";
import { apiUrl, tokenKey } from "config/default.json";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export async function login(email, password) {
  const { data } = await http.post(`${apiUrl}/auth`, { email, password });
  localStorage.setItem(tokenKey, data.token);
}

export async function signup(values) {
  return await http.post(`${apiUrl}/users`, values);
}

export async function addFavorite(profId) {
  try {
    await http.put(`${apiUrl}/users/${profId}`);
    toast("Added to Favorites!");
  } catch (ex) {
    if (ex.response && ex.response.status >= 400) {
      toast.error(ex.response.data);
    } else {
      toast.error("Communication problem with server.. try again later");
    }
  }
}

export const userService = {
  login,
  getCurrentUser,
  logout,
  signup,
  addFavorite,
};
