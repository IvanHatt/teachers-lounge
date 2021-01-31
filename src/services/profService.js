import { toast } from "react-toastify";
import http from "services/httpService";
import { apiUrl } from "config/default.json";

export async function createProf(values) {
  try {
    if (values.profImage === "") {
      values.profImage = null;
    }
    await http.post(`${apiUrl}/profs`, values);
    toast("Saved!");
    //redirect
  } catch (ex) {
    if (ex.response && ex.response.status === 400) {
      alert(ex.response.data);
    } else {
      alert("Communication problems.. try again later");
      const data = {};
      return data;
    }
  }
}

export async function getProfs() {
  try {
    return await http.get(`${apiUrl}/profs/my-profs`);
  } catch (ex) {
    if (ex.response && ex.response.status === 400) {
      alert(ex.response.data);
    } else {
      alert("Communication problems with server.. try again later");
      const data = {};
      return data;
    }
  }
}

export async function getAllProfs() {
  try {
    return await http.get(`${apiUrl}/profs/all-profs`);
  } catch (ex) {
    if (ex.response && ex.response.status === 400) {
      alert(ex.response.data);
    } else {
      alert("Communication problem with server.. try again later");
      const data = {};
      return data;
    }
  }
}

export const profService = { createProf, getProfs, getAllProfs };
