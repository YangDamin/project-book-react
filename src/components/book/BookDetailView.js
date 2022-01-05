import { List } from 'antd/lib/form/Form';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './BookDetailView.css';

const BookDetailView = () => {
    const { bookid } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        const result = axios({
            url: `http://localhost:8080/book/detail/${bookid}`,
            method: 'get'
        });
        result.then((res) => {
            console.log(res);
            console.log(res.data);
            setBook(res.data);
        });
    }, []);//deps

    return (
        <section>
            <div>
                <div class="row">
                    <div class="col-md-2 mr-5"></div>
                    <div class="col-md-3 mx-5"><img class="card-img-top mb-5 mt-3" src={book.imageurl} alt="..." /></div>
                    <div class="col-md-5 mx-3">
                        <hr></hr>
                        {/* <div class="large mt-5 mb-1"><b>{book.author}</b> 지음 | {book.publisher}</div> */}
                        {/* <div class="medium mb-3">{book.publisher}</div> */}
                        <h3 class="display-5 mt-lg-5 fw-bolder">{book.name}</h3>
                        <div class="large mb-1"><b>{book.author}</b> 지음 | {book.publisher}</div>
                        <div class="fs-5 mb-5">
                            <span><small>판매가 : </small><b><font color="red">{book.price}원</font></b></span>
                        </div>
                        <p class="text-dark mb-5">[추가적립] 5만원 이상 구매 시 2,000원 추가적립 안내<br></br>
                            [회원혜택] 회원 등급 별, 3만원 이상 구매 시 2~4% 추가적립 안내<br></br>
                            [리뷰적립] 리뷰 작성 시 e교환권 최대 300원 추가적립 안내</p>
                        <div class="d-flex">
                            <input class="form-control text-center me-3" id="inputQuantity" type="number" value="1"
                                onChange={(e) => {
                                    console.log(e);
                                    document.getElementById("inputQuantity").value = e.target.value;
                                }} />
                            <button class="btn btn-outline-dark flex-shrink-0 me-2" type="button">
                                <i class="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                <i class="bi-cart-fill me-1"></i>
                                구매하기
                            </button>
                        </div>
                    </div>
                </div>

                <div class="row"></div>
                <div class="col-md-9 mx-auto">
                    <hr></hr>

                </div>

                <div class="col-md-6  mx-auto">
                    <img class="border card-img-top mt-5 mb-md-0" src={book.description} alt="..." /></div>
            </div>


        </section>

    )
};

export default BookDetailView;