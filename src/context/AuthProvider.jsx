import React, {createContext, useEffect, useState} from "react";
import {getAuth} from "firebase/auth";

const AuthContext = createContext();

export default function AuthProvider({children}) {
  const auth = getAuth();
  useEffect(() => {
    const unsubscribed = auth.onIdTokenChanged((user) => {
      console.log("user: ", user);
    });
    return () => {
      unsubscribed();
    };
  }, [auth]);
  const [user, setUser] = useState({});
  return <AuthContext.Provider value={(user, setUser)}>{children}</AuthContext.Provider>;
}
