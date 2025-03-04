import React from 'react'
import Sidebar from "../Components/Sidebar/Sidebar";
import TopNavbar from "../Components/Navbar/Navbar";
import AllocateSubjects from '../Containers/AllocateSubjects/AllocateSubjects';

const AllocateSubject = () => {
  return (
    <div>
      <Sidebar />
      <TopNavbar />
      <AllocateSubjects />
    </div>
  )
}

export default AllocateSubject