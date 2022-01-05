import React from 'react';

const DiaryList = () => {

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
          <tr>
            <th scope="row">1</th>
            <td>bookDiary.name</td>
            <td>bookDiary.title</td>
            <td>bookDiary.lastUpdatedDate</td>
            <td><button class="btn btn-dark">삭제</button></td>
          </tr>
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