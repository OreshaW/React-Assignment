import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import TopNavbar from "../Components/Navbar/Navbar";
import StudentsDashboard from "../Containers/Students/StudentDashboard";  

const Students = () => {
  return (
    <div>
      <Sidebar />
      <TopNavbar />
      <StudentsDashboard />
    </div>
  );
};

export default Students;
