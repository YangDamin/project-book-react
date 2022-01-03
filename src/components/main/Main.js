import React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Book from '../book/Book';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Nav from '../common/Nav';


const Main = () => {
  return (
    <div>

      <Header></Header>
      <Nav></Nav>
      <Footer></Footer>
    </div>
  );
};

export default Main;