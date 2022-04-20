import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  errorNotification,
  successNotification,
} from "../services/notificationService";

import { getUser, newUser } from "../services/userService";

import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
export const authContext = createContext();
const { Provider } = authContext;

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [redirectTo, setRedirectTo] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      login(JSON.parse(user));
    }
  }, []);

  const login = (user) => {
    setUser(user);
    setIsLoggedIn(true);
  };
  const navigateToLoginAndRedirect = (redirect) => {
    setRedirectTo(redirect);
    navigate("/login");
  };

  const redirect = () => {
    if (redirectTo) {
      navigate(redirectTo);
    } else {
      navigate("/");
    }
  };
  const signInWithMail = (email, password, userData) => {
    if (!isLoggedIn) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user: { reloadUserInfo } }) => {
          const userInfo = { ...userData, email, id: reloadUserInfo.localId };
          setUserInfo(userInfo);
          newUser(userInfo);
          redirect();
        })
        .catch(({ message }) => {
          errorNotification(message);
        });
    } else {
      errorNotification("You are already logged in");
    }
  };

  const loginWithMail = (email, password) => {
    if (!isLoggedIn) {
      signInWithEmailAndPassword(auth, email, password)
        .then(({ user: { reloadUserInfo } }) => {
          return getUser(reloadUserInfo.localId);
        })
        .then((res) => {
          setUserInfo(res.data());
          redirect();
        })
        .catch(({ message }) => {
          errorNotification(message);
        });
    } else {
      errorNotification("You are already logged in");
    }
  };
  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    successNotification("You are logged out");
  };

  function setUserInfo(user) {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    setIsLoggedIn(true);
    successNotification("Welcome " + user.name);
  }

  const loginData = {
    user,
    isLoggedIn,
    login,
    logout,
    loginWithMail,
    signInWithMail,
    navigateToLoginAndRedirect,
  };
  return <Provider value={loginData}>{children}</Provider>;
};
