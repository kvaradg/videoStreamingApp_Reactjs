import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  reauthenticateWithPhoneNumber,
} from "firebase/auth";
import { auth } from "./firebase";

export let AuthContext = createContext();

let AuthProvider = ({ children }) => {
  let [user, setUser] = useState("");
  useEffect(() => {
    return onAuthStateChanged(auth, userInfo => {
      if (
        (userInfo && userInfo.emailVerified === true) ||
        reauthenticateWithPhoneNumber
      ) {
        //after reloading on myprofile it stay on same page
        let TOKEN = userInfo.accessToken;
        window.sessionStorage.setItem("TOKEN", TOKEN);
        setUser(userInfo);
      } else {
        setUser(null);
      }
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
