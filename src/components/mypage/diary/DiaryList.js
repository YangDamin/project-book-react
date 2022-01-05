import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DiaryList = () => {
  const [diaryList, setDiaryList] = useState([]);
  console.log(diaryList);
  useEffect(() => {
    const id = sessionStorage.getItem("userId");
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    const formData = new FormData();
    formData.append("userId", id);
    const result = axios({
      url: 'http://localhost:8080/mypage/diary/list',
      method: 'post',
      data: formData
    });
    result.then((res) => {
      console.log(res);
      console.log("DiaryList 비동기통신 결과:")
      console.log(res.data);
      const responseData = res.data;
      setDiaryList(responseData);
    });
  }, []);//deps
  return (
    <div class="col-9 mx-auto">
      <div class="row">

        <div class="col-lg-4 ml-0">
          <h1>독서노트 목록</h1>
        </div>
        <div class="col-lg-2"></div>
        <div class="col-lg-6">
          <div class="input-group mt-2">
            <div class="form-outline ">
              <input id="search-focus" type="search" id="form1" class="form-control" style={{ width: "270px" }} placeholder="책 이름으로 검색" />
            </div>
            <button type="button" class="btn btn-dark">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">책 이름</th>
            <th scope="col">제목</th>
            <th scope="col">작성일자</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {diaryList.map((diary) => {
            return (
              <tr>
                <th scope="row">1</th>
                <td>{diary.book.name}</td>
                <td>{diary.title}</td>
                <td>{diary.lastUpdatedDate}</td>
                <td>
                  <button class="btn btn-dark mr-2" data-id={diary.id} onClick={(e) => { }}>수정</button>&nbsp;
                  <button class="btn btn-dark" data-id={diary.id} onClick={() => { }}>삭제</button></td>
              </tr>
            );
          })}

          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td><button class="btn btn-dark">삭제</button></td>

          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td><button class="btn btn-dark">삭제</button></td>

          </tr>
        </tbody>
      </table>
    </div >
  );
};

export default DiaryList;