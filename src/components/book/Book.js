import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookListView from './BookListView';

const Book = () => {
  const { category } = useParams();
  console.log(category);

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const result = axios({
      url: `http://localhost:8080/book/${category}`,
      method: 'get'
    });
    result.then((res) => {
      console.log(res);
      console.log(res.data);
      setBookList(res.data);
    });
  }, [bookList]);//deps

  return (
    // <div>
    //   {/* <BookListView bookList = {bookList}/> */}

    // </div>
    <section>
      <div class="container">
        <div class="row">
          {bookList.map((book) => {
            return (
              <div class="col-6 col-lg-3 col-md-4 pb-3 pt-3">
              <div> <a href="#" class="d-block mb-3"><img src={book.imageurl} class="img-fluid w-100" alt="Product image" width="500" height="700" /></a><a href="#" class="d-inline-block link-secondary mb-2 text-decoration-none">{book.category}</a><a href="#" class="link-dark text-decoration-none"><h3 class="h6">{book.name}</h3></a>
                <div><span class="h6">{book.price}원</span>
                </div>
              </div>
            </div>
            )
          })}

        </div>
      </div>
    </section>
  );
};

export default Book;