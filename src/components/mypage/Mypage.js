import React from 'react';
import { Route, Routes } from 'react-router';
import SideMenu from './common/SideMenu';
import Diary from './diary/Diary';
import UserCheckout from './UserCheckout';
import UserProfile from './userInfo/UserProfile';
import UserUpdate from './userInfo/UserUpdate';


const Mypage = () => {
  return (
    <div className="row">
      <SideMenu></SideMenu>
      <Routes>
        <Route path="/" element={<UserProfile></UserProfile>}></Route>
        <Route path="/userProfile" element={<UserProfile></UserProfile>}></Route>
        <Route path='/userUpdate' element={<UserUpdate></UserUpdate>}></Route>
        <Route path="/diary/*" element={<Diary></Diary>}></Route>
      </Routes>
    </div >
  );
};

export default Mypage;