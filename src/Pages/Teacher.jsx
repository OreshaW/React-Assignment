import React from 'react'
import Sidebar from "../Components/Sidebar/Sidebar";
import TopNavbar from "../Components/Navbar/Navbar";
import TeachersDashboard from "../Containers/Teacher/TeacherDashboard";

const Teacher = () => {
  return (
    <div>
      <Sidebar />
      <TopNavbar />
      <TeachersDashboard />
    </div>
  )
}

export default Teacher