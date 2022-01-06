import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DiaryList = () => {
  const navigate = useNavigate();
  let num = 0;
  const [diaryList, setDiaryList] = useState([]);
  // console.log(diaryList);
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
      // console.log(res);
      // console.log("DiaryList 비동기통신 결과:")
      // console.log(res.data);
      const responseData = res.data;
      setDiaryList(responseData);
    });
  }, [diaryList]);//deps

  return (
    <div class="col-9 mx-auto">
      <div class="row">

        <div class="col-lg-3 ml-0">
          <h2>독서노트 목록</h2>
        </div>
        <div class="col-lg-3">
          <div class="input-group">
            <select class="form-control">
              <option>작성일 (최신순)</option>
              <option>책이름 오름차순</option>
              <option>책이름 내림차순</option>
            </select>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="input-group">
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
            <th scope="col">한 줄 평</th>
            <th scope="col">작성일</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {diaryList.map((diary) => {
            num += 1;
            return (
              <tr key={diary.id}>

                <th scope="row">{num}</th>
                <td>  <Link to={`/mypage/diary/detail/${diary.id}`}>{diary.book.name}</Link></td>
                <td>{diary.title}</td>

                <td>{new Date(diary.lastUpdatedDate).toISOString().slice(0, 10)}</td>
                <td>
                  <button class="btn btn-dark mr-2" data-id={diary.id} onClick={(e) => {
                    const id = e.target.dataset.id;
                    console.log(e.target.dataset.id);
                    navigate(`/mypage/diary/update/${id}`)
                  }}>수정</button>&nbsp;
                  <button class="btn btn-dark" data-id={diary.id}
                    onClick={(e) => {
                      const id = e.target.dataset.id;
                      const url = `http://localhost:8080/mypage/diary/${id}`;
                      axios({
                        url: url,
                        method: 'DELETE',
                      }).then((res) => {
                        const result = res.data;
                        alert(result.msg);
                        // navigate("/mypage/diary");
                      })
                    }}>삭제</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div >
  );
};

export default DiaryList;