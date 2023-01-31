/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (item) => {
      if (item) {
        const { displayName, email, uid, photoURL } = item;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        if (item.accessToken !== localStorage.getItem("accessToken")) {
          localStorage.setItem("accessToken", item.accessToken);
          navigate("/");
        }
        return;
      }
      navigate("/login");
      setIsLoading(false);
      setUser({});
    });
    return () => {
      unsubscribed();
    };
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {isLoading ? <Spin></Spin> : children}
    </AuthContext.Provider>
  );
}
