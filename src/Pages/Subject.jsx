import React from 'react'
import Sidebar from "../Components/Sidebar/Sidebar";
import TopNavbar from "../Components/Navbar/Navbar";
import SubjectsDashboard from '../Containers/Subject/SubjectDashboard';

const Subject = () => {
  return (
    <div>
      <Sidebar />
      <TopNavbar />
      <SubjectsDashboard />
    </div>
  )
}

export default Subject