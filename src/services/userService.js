/* eslint-disable import/no-anonymous-default-export */
import http from "services/httpService";
import { apiUrl, tokenKey } from "config/default.json";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { serialize } from "object-to-formdata";

//logout - delete token
export function logout() {
  localStorage.removeItem(tokenKey);
}


///decode token once connected
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}


//login
export async function login(email, password) {
  const { data } = await http.post(`${apiUrl}/auth`, { email, password });
  localStorage.setItem(tokenKey, data.token);
}

//register
export async function signup(values) {
  const dataForm = serialize(values);
  return await http.post(`${apiUrl}/users`, dataForm);
}


///add card to favorites
export async function addFavorite(profId) {
  try {
    await http.put(`${apiUrl}/users/add-fav/${profId}`);
    toast("Added to Favorites!");
  } catch (ex) {
    if (ex.response && ex.response.status >= 400) {
      toast.error(ex.response.data);
    } else {
      toast.error("Communication problem with server.. try again later");
    }
  }
}


///remove from favorites
export async function removeFavorite(profId) {
  try {
    await http.put(`${apiUrl}/users/delete-fav/${profId}`);
    toast("Deleted from Favorites!");
    window.location = "/favorites";
  } catch (ex) {
    if (ex.response && ex.response.status >= 400) {
      toast.error(ex.response.data);
    } else {
      toast.error("Communication problem with server.. try again later");
    }
  }
}


//schemas
export const userSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Must be at least 2 characters")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Must be at least 2 characters")
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "At least 6 characters")
    .max(1024)
    .required("Required"),
});

export const profUserSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Must be at least 2 characters")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Must be at least 2 characters")
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  profImage: Yup.mixed(),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "At least 6 characters")
    .max(1024)
    .required("Required"),
});

export const userService = {
  login,
  getCurrentUser,
  logout,
  signup,
  addFavorite,
  removeFavorite,
  userSchema,
  profUserSchema,
};
