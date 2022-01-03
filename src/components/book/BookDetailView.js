import './BookDetailView.css';

const BookDetailView = () => {
    return (
        <div class="gy-5 row">
            <div class="col-lg-6">
                    <img src="/image/book/novel1.jpg" class="fill" alt="Product image" width="500" height="700" />
            </div>
            <div class="col-lg-6" align="left">
                <h3 class="fw-bold mb-3">불편한 편의점</h3>
                <p class="lead mb-4 pe-sm-5">김호연 나무옆의자</p>
            </div>
        </div>
    )
};

export default BookDetailView;