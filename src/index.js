import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';
import Home from './Pages/home';
import Students from './Pages/Students';
import Classroom from './Pages/Classroom';
import Teacher from './Pages/Teacher';
import Subject from './Pages/Subject';
import AllocateSubject from './Pages/AllocateSubject';
import AllocateClassroom from './Pages/AllocateClassroom';
import StudentsDetailReport from './Pages/StudentDetailReport';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/students' element={<Students />} />
      <Route path='/classrooms' element={<Classroom />} />
      <Route path='/teachers' element={<Teacher />} />
      <Route path='/subjects' element={<Subject />} />
      <Route path='/allocate-subject' element={<AllocateSubject />} />
      <Route path='/allocate-classrooms' element={<AllocateClassroom />} />
      <Route path='/student-detail-report' element={<StudentsDetailReport />} />
      </Routes>
    </BrowserRouter>
);
