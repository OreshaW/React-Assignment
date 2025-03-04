import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './Navbar.scss';
import avatar from '../../Assets/avatar.jpg';

const TopNavbar = () => {
  return (
    <Navbar className="top-navbar">
      <NavbarBrand>FINAP</NavbarBrand>
      <div className="user-profile">
        <img src={avatar} alt="User" className="profile-img" />
      </div>
    </Navbar>
  );
};

export default TopNavbar;
