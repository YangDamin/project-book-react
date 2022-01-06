import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const UpdateDiary = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("Update Diary ID:", id);
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
      <h2 class="text-center mb-4">독서 노트 수정 &nbsp;<i class="fas fa-pencil-alt"></i></h2>
      <form>h
        <div class="row">
          <div class="col-lg-5">
            <img src={data.book.imageurl} class="rounded float-start" style={{ opacity: 0.7, width: "80%", height: "200px" }} alt="책" />
            <div class="border border-light text-center" style={{ width: "80%" }}>
              <table class="table">
                <tbody>
                  <tr>
                    <th scope="row">책제목</th>
                    <td>
                      <h5>{data.book.name}</h5>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">작가</th>
                    <td><h5>{data.book.author}</h5></td>
                  </tr>
                  <tr>
                    {/* book id를 바탕으로 find이용해서 orderdate찾기  */}
                    <th scope="row">최초작성일</th>
                    <td><h5>{data.writtenDate}</h5></td>
                  </tr>
                  <tr>
                    <th scope="row">최종작성일</th>
                    <td><h5>{data.lastUpdatedDate}</h5></td>
                  </tr>
                </tbody>
              </table>
              <h5><label for="thought">느낀점&nbsp;&nbsp;<i class="fas fa-comment-dots"></i></label></h5>
              <textarea name="thought" id="thought" style={{ width: "100%" }} rows="5" class="bg-danger bg-opacity-10" value={data.thought}
                onChange={(e) => {
                  setData({ ...data, thought: e.target.value })
                }}>

              </textarea>
            </div>
          </div>
          <div class="col-lg-7">
            <h4 class="text-center"><label for="content">감상문&nbsp;&nbsp;<i class="far fa-keyboard"></i></label></h4>
            <input type="text" name="title" id="title" class="form-control bg-warning bg-opacity-10 mb-1" placeholder="한 줄 평"
              onChange={(e) => {
                setData({ ...data, title: e.target.value })
              }}></input>
            <textarea name="content" id="content" class="form-control bg-warning bg-opacity-10" rows="17" placeholder="줄거리 입력" value={data.content}
              onChange={(e) => {
                setData({ ...data, content: e.target.value })
              }}>
            </textarea>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
              <button type="button" class="btn btn-dark" onClick={() => {
                const formData = new FormData();
                const title = document.getElementById("title").value;
                const content = document.getElementById("content").value;
                const thought = document.getElementById("thought").value;
                formData.append("id", id);
                formData.append("title", title);
                formData.append("content", content);
                formData.append("thought", thought);
                const result = axios({
                  url: 'http://localhost:8080/mypage/diary/update',
                  method: 'post',
                  data: formData
                });
                result.then((res) => {
                  console.log(res);
                  console.log("WriteDiary 작성 후 비동기통신 결과:")
                  console.log(res.data);
                  window.location.href = "/mypage/diary";
                  const result = res.data;
                  if (result.code == 200) {
                    navigate("/mypage");
                  } else if (result.code == 400) {
                    alert(result.msg);
                    window.location.href = `/mypage/diary/update/${id}`;
                  }
                });
              }}>수정하기</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateDiary;