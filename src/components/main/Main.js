import React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Book from '../book/Book';
import Footer from '../common/Footer';
import Header from '../common/Header';
import UserUpdate from '../mypage/UserUpdate';
import Signin from '../user/Signin';
import Nav from '../common/Nav';
import Item from '../main/Item';

const Main = () => {
  return (
    <div>
      <Link to="/sub">폼</Link>
      <Link to="/user/signin">폼</Link>
      <Routes>
        <Route path='/sub' element={<UserUpdate></UserUpdate>}></Route>
      </Routes>
      <Header></Header>
      <Nav></Nav>
      <Item></Item>
      <Footer></Footer>
    </div>
  );
};

export default Main;