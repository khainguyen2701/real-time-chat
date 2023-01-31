import React, {Suspense} from "react";
import {createBrowserRouter, Outlet} from "react-router-dom";
import AppProvider from "../context/AppProvider";
import AuthProvider from "../context/AuthProvider";

const Login = React.lazy(() => import("../pages/login"));
const Home = React.lazy(() => import("../pages/chatRoom"));
const AuthLayout = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <AuthProvider>
        <AppProvider>
          <Outlet />
        </AppProvider>
      </AuthProvider>
    </Suspense>
  );
};

export default createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]);
