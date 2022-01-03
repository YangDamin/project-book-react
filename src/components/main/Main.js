import React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Book from '../book/Book';
import Footer from '../common/Footer';
import Header from '../common/Header';

const Main = () => {
  return (
    <div>

      <Header></Header>
      <h1>메인페이지</h1>
      <Footer></Footer>
    </div>
  );
};

export default Main;