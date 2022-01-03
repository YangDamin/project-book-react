import React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Book from '../book/Book';
import Footer from '../common/Footer';
import Header from '../common/Header';
import UserUpdate from '../mypage/UserUpdate';
import Signin from '../user/Signin';

const Main = () => {
  return (
    <div>
      <Link to="/sub">폼</Link>
      <Link to="/user/signin">폼</Link>
      <Routes>
        <Route path='/sub' element={<UserUpdate></UserUpdate>}></Route>
      </Routes>
      <Header></Header>
      <h1>메인페이지</h1>
      <Footer></Footer>
    </div>
  );
};

export default Main;