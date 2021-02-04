import { toast } from "react-toastify";
import Swal from "sweetalert2";
import http from "services/httpService";
import { apiUrl } from "config/default.json";

export async function createProf(values) {
  try {
    if (values.profImage === "") {
      values.profImage = null;
    }
    await http.post(`${apiUrl}/profs`, values);
    toast("Saved!");
    window.location = "/my-profs";
  } catch (ex) {
    if (ex.response && ex.response.status >= 400) {
      toast.error(ex.response.data);
    } else {
      toast.error("Communication problems.. try again later");
      const data = {};
      return data;
    }
  }
}

export async function getProfs() {
  try {
    return await http.get(`${apiUrl}/profs/my-profs`);
  } catch (ex) {
    if (ex.response && ex.response.status >= 400) {
      toast.error(ex.response.data);
    } else {
      toast.error("Communication problems with server.. try again later");
    }
  }
}

export async function getFavProfs() {
  try {
    return await http.get(`${apiUrl}/profs/myfav-profs`);
  } catch (ex) {
    if (ex.response && ex.response.status >= 400) {
      toast.error(ex.response.data);
    } else {
      toast.error("Communication problems with server.. try again later");
    }
  }
}

export async function getAllProfs() {
  try {
    return await http.get(`${apiUrl}/profs/all-profs`);
  } catch (ex) {
    if (ex.response && ex.response.status >= 400) {
      toast.error(ex.response.data);
    } else {
      toast.error("Communication problem with server.. try again later");
    }
  }
}

export async function deleteProf(id) {
  Swal.fire({
    icon: "warning",
    title: "Are you sure you want to delete this Card?",
    showCancelButton: true,
    confirmButtonText: `Yes`,
    customClass: {
      cancelButton: "order-2",
      confirmButton: "order-1",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      http
        .delete(`${apiUrl}/profs/${id}`)
        .then(() => {
          Swal.fire("Deleted!", "", "success");
          window.location = "/my-profs";
        })
        .catch((ex) =>
          ex.response && ex.response.status >= 400
            ? toast.error(ex.response.data)
            : toast.error("Communication problem with server.. try again later")
        );
    }
  });
}

export const profService = {
  createProf,
  getProfs,
  getAllProfs,
  getFavProfs,
  deleteProf,
};
