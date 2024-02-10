import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};

export default Main;
