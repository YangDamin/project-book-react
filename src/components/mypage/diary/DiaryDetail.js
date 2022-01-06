import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const DiaryDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("Detail Diary ID:", id);
  const [data, setData] = useState({ book: { name: "책제목", imageurl: "/image/book/default-book.jpg", author: '작가', } });

  useEffect(() => {
    const result = axios({
      url: `http://localhost:8080/mypage/diary/${id}`,
      method: 'get',
    });
    result.then((res) => {
      const responseData = res.data;
      console.log(responseData);
      setData(responseData);
    });
  }, []);//deps

  return (
    <div class="col-9 mx-auto">
      <h2 class="text-center mb-4">독서 노트 조회 &nbsp;<i class="fas fa-pencil-alt"></i></h2>
      <form>
        <div class="row">
          <div class="col-lg-5">
            <img src={data.book.imageurl} class="rounded float-start" style={{ opacity: 0.7, width: "80%", height: "200px" }} alt="책" />
            <div class="border border-light text-center" style={{ width: "80%" }}>
              <table class="table">
                <tbody>
                  <tr>
                    <th scope="row">책제목</th>
                    <td>
                      <h5>{data ? data.book.name : ""}</h5>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">작가</th>
                    <td><h5>{data ? data.book.author : ""}</h5></td>
                  </tr>
                  <tr>
                    {/* book id를 바탕으로 find이용해서 orderdate찾기  */}
                    <th scope="row">최초작성일</th>
                    <td><h5>{data ? data.writtenDate : ""}</h5></td>
                  </tr>
                  <tr>
                    <th scope="row">최종작성일</th>
                    <td><h5>{data ? data.lastUpdatedDate : ""}</h5></td>
                  </tr>
                </tbody>
              </table>
              <h5><label for="thought">느낀점&nbsp;&nbsp;<i class="fas fa-comment-dots"></i></label></h5>
              <textarea name="thought" id="thought" style={{ width: "100%" }} rows="5" class="bg-danger bg-opacity-10" value={data.thought} readOnly>

              </textarea>
            </div>
          </div>
          <div class="col-lg-7">
            <button type="button" class="btn btn-dark" onClick={() => {
              const url = `/mypage/diary/update/${id}`;
              navigate(url);
            }}>수정하러 하기</button>
            <h4 class="text-center"><label for="content">감상문&nbsp;&nbsp;<i class="far fa-keyboard"></i></label></h4>
            <input type="text" name="title" id="title" class="form-control bg-warning bg-opacity-10 mb-1" placeholder="제목 입력" value={data.title} readOnly></input>
            <textarea name="content" id="content" class="form-control bg-warning bg-opacity-10" rows="17" placeholder="내용 입력" value={data.content} readOnly>
            </textarea>

          </div>
        </div>
      </form>
    </div>
  );
};

export default DiaryDetail;