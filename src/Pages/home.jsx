import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import TopNavbar from "../Components/Navbar/Navbar";
import Dashboard from "../Containers/Dashboard/Dashboard";

const home = () => {
  return (
    <div>
      <Sidebar />
      <TopNavbar />
      <Dashboard />
    </div>
  );
};
export default home;
