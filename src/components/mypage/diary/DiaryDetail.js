import React, { useState } from 'react';
import { useParams } from 'react-router';

const DiaryDetail = () => {
  const { id } = useParams();
  console.log("Update Diary ID:", id);
  const [data, setData] = useState({ orderDate: new Date().toISOString().slice(0, 10), book: { name: "책제목", imageurl: "/image/book/default-book.jpg", author: '작가', } });
  return (
    <div class="col-lg-6" id="contents">
      <h3>독서 노트 수정 &nbsp;<i class="fas fa-pencil-alt"></i></h3>
      <form>
        <div class="row">
          <div class="col-lg-5">
            <img src={data.book.imageurl} onerror="this.src='/image/book/default-book.jpg'" class="rounded float-start" style={{ opacity: 0.7, width: "80%", height: "200px" }} alt="책" />
            <div class="border border-light text-center" style={{ width: "80%" }}>
              <table class="table">
                <tbody>
                  <tr>
                    <th scope="row">책제목</th>
                    <td>
                      {/* <select name="bookId" id="bookId"
                        onChange={(e) => {
                          const bookId = e.target.value;
                          const bookInfo = dataList.find((data) => data.book.id == bookId);
                          console.log(bookInfo);
                          setData(bookInfo);
                        }}>
                        <option value="">--선택--</option>
                        {dataList.map((data) => {
                          return (
                            <option key={data.book.id} value={data.book.id}>{data.book.name}</option>
                          )
                        })}
                      </select> */}
                      <h5>{data.book.name}</h5>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">작가</th>
                    <td><h5>{data.book.author}</h5></td>
                  </tr>
                  <tr>
                    {/* book id를 바탕으로 find이용해서 orderdate찾기  */}
                    <th scope="row">구매일</th>
                    <td><h5>{data.orderDate}</h5></td>
                  </tr>
                  <tr>
                    <th scope="row">작성일</th>
                    <td><h5>{new Date().toISOString().slice(0, 10)}</h5></td>
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
            <input type="text" name="title" id="title" class="form-control bg-warning bg-opacity-10 mb-1" placeholder="제목 입력"></input>
            <textarea name="content" id="content" class="form-control bg-warning bg-opacity-10" rows="17" placeholder="내용 입력">
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

export default DiaryDetail;