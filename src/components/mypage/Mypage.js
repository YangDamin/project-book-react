import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import SideMenu from './common/SideMenu';
import Diary from './diary/Diary';
import UserCheckout from './UserCheckout';
import UserProfile from './userInfo/UserProfile';
import UserUpdate from './userInfo/UserUpdate';


const Mypage = () => {
  useEffect(() => {
    if (sessionStorage.getItem("userId")) {

    } else {
      alert('로그인 후 이용할 수 있습니다.');
      window.location.href = "/";
    }
  })
  return (
    <div className="container">
      <div className="row">
        <SideMenu></SideMenu>
        <Routes>
          <Route path="/" element={<UserProfile></UserProfile>}></Route>
          <Route path="/userProfile" element={<UserProfile></UserProfile>}></Route>
          <Route path='/userUpdate' element={<UserUpdate></UserUpdate>}></Route>
          <Route path="/diary/*" element={<Diary></Diary>}></Route>
        </Routes>
      </div >
    </div>
  );
};

export default Mypage;