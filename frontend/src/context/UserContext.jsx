/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

import {
  loginUser,
  checkAuthStatus,
  registerUser,
  choiceApi,
  getUser,
} from "../helpers/api-communicators";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();

  // fetch if user's cookies are valid then skip login
  const getAllUsers = async () => {
    const data = await getUser();
    return data;
  };

  async function checkStatus() {
    const data = await checkAuthStatus();
    console.log(data);
    if (data.isUserLoggedIn) {
      setUser(data.userData);
      setIsLoggedIn(true);

      if (data.userData.role === "admin") {
        navigate("/admin");
      } else {
        if (data.userData.choice === "") {
          navigate("/survey");
        } else {
          navigate(`/path/${data.userData.id}`);
        }
      }
    } else {
      navigate("/");
    }
  }

  useEffect(() => {
    checkStatus();
  }, []);

  const login = async (formFields) => {
    const data = await loginUser(formFields);

    if (data === "Password not correct !") {
      alert("Check your Password !");
    }
    if (data === "Email does not exist !") {
      alert("Email does not exist !");
    }
    if (data.data[0]) {
      setUser(data.data[0]);
      setIsLoggedIn(true);
      if (data.data[0].role === "admin") {
        navigate("/admin");
      } else {
        if (data.data[0].path === "") {
          navigate("/survey");
        } else {
          navigate(`/path/${data.data[0].id}`);
        }
      }
    }
  };

  const signup = async (formFields) => {
    const data = await registerUser(formFields);
    if (data === "Email already exist !") {
      alert("Email already exist !");
    }
    if (data) {
      setUser(data);
      setIsLoggedIn(true);
      navigate("/survey");
    }
  };

  const setSurvey = async (choice) => {
    const data = await choiceApi({ choice: choice, User: user.id });
    console.log(data);
    return { user, data };
  };

  const getUserById = async (id) => {
    const data = await getUser(id);
    return data;
  };

  const value = {
    user,
    isLoggedIn,
    login,
    signup,
    setSurvey,
    getUserById,
    getAllUsers,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
