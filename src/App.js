import logo from './logo.svg';
import './App.css';
import Signin from './components/user/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Book from './components/book/Book';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/user/signin" element={<Signin></Signin>}></Route>
          <Route path="/book" element={<Book></Book>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
