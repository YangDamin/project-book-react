import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Nav from '../common/Nav';
import View from './View';

const Book = () => {
  return (
    <div>
      <Header></Header>
      <Nav/>
      <View/>
      <Footer></Footer>
    </div>
  );
};

export default Book;