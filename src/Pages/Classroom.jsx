import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import TopNavbar from "../Components/Navbar/Navbar";
import ClassroomDashboard from "../Containers/Classroom/ClassroomDashboard";

const Classroom = () => {
  return (
    <div>
      <Sidebar />
      <TopNavbar />
      <ClassroomDashboard />
    </div>
  );
};

export default Classroom;
