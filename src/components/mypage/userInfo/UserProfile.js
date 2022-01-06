import axios from 'axios';
import React, { useEffect, useState } from 'react';



const UserProfile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const formData = new FormData();
    const id = sessionStorage.getItem("userId");
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    formData.append("userId", email);
    formData.append("userPassword", password)
    const result = axios({
      url: 'http://localhost:8080/mypage/userProfile',
      method: 'post',
      data: formData
    });
    result.then((res) => {
      console.log(res);
      console.log(res.data);
      setUser(res.data);
    });//deps
  }, []);
  return (
      


    // <div class="col-9 mx-auto">
    //   <h3 id="profile_title"><b>회원 정보</b></h3>
    //   <hr></hr>
    //   <div class="mt-2" id="profile_content">
    //     <div>
    //         <p class="my-3 p-1 fs-4">
    //           <div>아이디</div><div>{user.email}</div>
    //         </p>
    //     </div>

    //     <div>
    //         <p class="my-3 p-1 fs-4">
    //           <div>생년월일</div><div>{user.birth}</div>
    //         </p>
    //     </div>

    //     <div>
    //       <p class="my-3 p-1 fs-4">
    //         <div>성명</div><div>{user.name}</div>
    //       </p>
    //     </div>

    //     <div>
    //       <p class="my-3 p-1 fs-4">
    //         <div>휴대폰 번호</div><div>{user.phone}</div>
    //       </p>
    //     </div>

    //     <div>
    //       <p class="my-3 p-1 fs-4">
    //         <div>주소</div><div>[{user.postcode}]&nbsp;&nbsp;{user.address1} {user.address2}</div>
    //       </p>
    //     </div>

    //     <div>
    //       <p class="my-3 p-1 fs-4">
    //         <div>가입일</div><div>{user.createdDate}</div>
    //       </p>
    //     </div>
    //   </div>

    // </div>

            

          <div class="col-7 mx-5">
              <div class="card mb-3">
                <div class="card-body">
                <h5 id="profile_title"><b>회원 정보</b></h5>
                <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">아이디</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {user.email}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">생년월일</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {user.birth}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">전화번호</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {user.phone}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">주소</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {user.address1} {user.address2}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">가입일</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {user.createdDate}
                    </div>
                  </div>
               
                 
                </div>
              </div>
              </div>
  );
};

export default UserProfile;