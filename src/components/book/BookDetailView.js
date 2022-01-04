import './BookDetailView.css';

const BookDetailView = () => {
return (
<div>
        <div class="row">
                <div class="col-md-2 mr-5"></div>
                <div class="col-md-3 mx-5"><img class="card-img-top mb-5" src="/image/book/novel1.jpg" alt="..." /></div>
                <div class="col-md-5 mx-3">
                    <div class="large mt-5">김호연</div>
                    <div class="medium mb-1">나무옆의자</div>
                    <h3 class="display-5 fw-bolder">불편한 편의점</h3>
                    <div class="fs-5 mb-5">
                        <span>15,000 원</span>
                    </div>
                <p class="text-dark">[추가적립] 5만원 이상 구매 시 2,000원 추가적립 안내<br></br>
                [회원혜택] 회원 등급 별, 3만원 이상 구매 시 2~4% 추가적립 안내<br></br>
                [리뷰적립] 리뷰 작성 시 e교환권 최대 300원 추가적립 안내</p>
                <div class="d-flex">
                        <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" />
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
                    <img class="border card-img-top mt-5 mb-md-0" src="/image/description/dnovel1.jpg" alt="..." /></div>

    </div>
   

        

)
};

export default BookDetailView;