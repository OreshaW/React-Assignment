import React from 'react'
import Sidebar from "../Components/Sidebar/Sidebar";
import TopNavbar from "../Components/Navbar/Navbar";
import StudentDetail from "../Containers/StudentDetail/StudentDetail";

const StudentDetailReport = () => {
  return (
    <div>
      <Sidebar />
      <TopNavbar />
      <StudentDetail />
    </div>
  )
}

export default StudentDetailReport