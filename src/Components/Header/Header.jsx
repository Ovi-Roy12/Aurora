import React from 'react';
import TopNav from './Navbar/TopNavbar/TopNavbar';
import MiddleNav from './Navbar/MiddleNavbar/MiddleNavbar';
import BottomNav from './Navbar/BottomNavbar/BottomNavbar';
const Header = () => {
  return (
    <div>
        <TopNav></TopNav>
        <MiddleNav></MiddleNav>
        <BottomNav></BottomNav>
    </div>
  )
}

export default Header