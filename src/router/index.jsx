import React, {Suspense} from "react";
import {createBrowserRouter, Outlet} from "react-router-dom";
import AuthProvider from "../context/AuthProvider";

const Login = React.lazy(() => import("../pages/login"));
const Home = React.lazy(() => import("../pages/chatRoom"));
const AuthLayout = () => {
  console.log("object1");
  return (
    <Suspense fallback={"Loading..."}>
      <AuthProvider>
        <Outlet />
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
