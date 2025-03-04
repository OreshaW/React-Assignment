import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardList,
  FaUsers,
  FaBuilding,
  FaUserCog,
} from "react-icons/fa";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav vertical>
        <NavItem>
          <NavLink href="/">
            <FaHome className="icon" /> Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/students">
            <FaUserGraduate className="icon" /> Students
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/classrooms">
            <FaBuilding className="icon" /> Classrooms
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/teachers">
            <FaChalkboardTeacher className="icon" /> Teachers
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/subjects">
            <FaBook className="icon" /> Subjects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/allocate-subject">
            <FaClipboardList className="icon" /> Allocate Subjects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/allocate-classrooms">
            <FaUsers className="icon" /> Allocate Classrooms
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/student-detail-report">
            <FaUserCog className="icon" /> Student Detail Report
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Sidebar;
