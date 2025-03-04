import React from 'react'
import Sidebar from "../Components/Sidebar/Sidebar";
import TopNavbar from "../Components/Navbar/Navbar";
import AllocateClassroomDashboard from '../Containers/AllocateClassroom/AllocateClassroomDashboard';

const AllocateClassroom = () => {
  return (
    <div>
      <Sidebar />
      <TopNavbar />
      <AllocateClassroomDashboard />
    </div>
  )
}

export default AllocateClassroom
