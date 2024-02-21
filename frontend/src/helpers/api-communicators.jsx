import axios from "axios";

export const loginUser = async (formFields) => {
  const res = await axios.post("/login", formFields);
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  const data = await res.data;
  return data;
};

export const getAllUserFromDB = async () => {
  const res = await axios.get("/get-all-users");
  return res;
};

export const checkAuthStatus = async () => {
  const res = await axios.get("/login");

  const userData = res.data.user;
  const isUserLoggedIn = res.data.loggedIn;
  return { userData, isUserLoggedIn };
};

export const registerUser = async (formFields) => {
  const res = await axios.post("/register", formFields);
  if (res.status !== 200) {
    throw new Error("Unable to register");
  }
  const data = await res.data[0];
  return data;
};

export const choiceApi = async (choice) => {
  const res = await axios.put("/survey", choice);
  return res;
};

export const getUser = async (id) => {
  const res = await axios.get("/getuser", id);
  console.log(res);
};
