import { toast } from "react-toastify";
import * as Yup from "yup";
import Swal from "sweetalert2";
import http from "services/httpService";
import { apiUrl } from "config/default.json";
import { serialize } from "object-to-formdata";

export const profSchema = Yup.object({
  profName: Yup.string()
    .min(2, "Min 2 characters!")
    .max(255, "Too long!")
    .required("Required!"),
  profTitle: Yup.string()
    .min(2, "Min 2 characters!")
    .max(255, "Too long!")
    .required("Required!"),
  profCity: Yup.string()
    .min(2, "Min 2 characters!")
    .max(255, "Too long!")
    .required("Required!"),
  profDescription: Yup.string().min(2).max(1024).required("Required!"),
  profEmail: Yup.string()
    .min(6, "Min 6 characters!")
    .max(255, "Too long!")
    .required("Required!")
    .email("Invalid Email"),
  profPhone: Yup.string()
    .min(9, "Min 9 numbers!")
    .max(15, "Too long!")
    .required("Required!")
    .matches(/\d{10,15}/, "Only numbers!"),
  profImage: Yup.mixed(),
  profPrice: Yup.string().min(1).max(4).required(),
});

export const initialFormValues = {
  profName: "",
  profTitle: "",
  profCity: "",
  profDescription: "",
  profEmail: "",
  profPhone: "",
  profImage: "",
  profPrice: "",
};

///create prof card
export async function createProf(values) {
  //convert from json to FormData
  const dataForm = serialize(values);
  try {
    await http.post(`${apiUrl}/profs`, dataForm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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

///get my own profs (the onwer)
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

/// get favorites
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

//// get all profs in db
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

// delete prof
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

///edit prof
export async function editProf(values) {
  const profId = values.profId;
  delete values.profId;
  try {
    await http.put(`${apiUrl}/profs/${profId}`, values);
    toast("Updated!");
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

/// get one specific prof (only the owner)
export async function getOneProf(id) {
  try {
    return await http.get(`${apiUrl}/profs/${id}`);
  } catch (ex) {
    if (ex.response && ex.response.status >= 400) {
      toast.error(ex.response.data);
    } else {
      toast.error("Communication problems with server.. try again later");
    }
  }
}

export const profService = {
  createProf,
  getProfs,
  getAllProfs,
  getFavProfs,
  deleteProf,
  editProf,
  getOneProf,
  initialFormValues,
  profSchema,
};
