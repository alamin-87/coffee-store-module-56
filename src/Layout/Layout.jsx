import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Layout;
