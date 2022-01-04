import React from 'react';

const WriteDiary = () => {
  return (
    <div class="col-lg-6" id="contents">
      <h3>독서 노트 작성 &nbsp;<i class="fas fa-pencil-alt"></i></h3>
      <form>
        <div class="row">
          <div class="col-lg-5">
            <img src="/image/book/novel1.jpg" onerror="this.src='/image/book/default-book.jpg'" class="rounded float-start" style={{ opacity: 0.7, width: "250px", height: "175px" }} alt="책" />
            <div class="border border-light text-center" style={{ width: "250px" }}>
              <table class="table">
                <tbody>
                  <tr>
                    <th scope="row">책제목</th>
                    <td>springBoot and React</td>
                  </tr>
                  <tr>
                    <th scope="row">작가</th>
                    <td>한국표준</td>
                  </tr>
                  <tr>
                    <th scope="row">책 구매일</th>
                    <td>2021-01-04</td>
                  </tr>
                  <tr>
                    <th scope="row">오늘 날짜</th>
                    <td>2021-01-04</td>
                  </tr>
                </tbody>
              </table>
              <h5><label for="thought">느낀점&nbsp;&nbsp;<i class="fas fa-comment-dots"></i></label></h5>
              <textarea name="thought" id="thought" style={{ width: "100%" }} rows="5" class="bg-danger bg-opacity-10">

              </textarea>
            </div>
          </div>
          <div class="col-lg-7">
            <h4 class="text-center"><label for="content">감상문&nbsp;&nbsp;<i class="far fa-keyboard"></i></label></h4>
            <textarea name="content" id="content" class="form-control bg-warning bg-opacity-10" rows="18">
            </textarea>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
              <button type="button" class="btn btn-dark ">작성하기</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WriteDiary;