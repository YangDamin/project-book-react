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
    <div class="col-9 mx-auto">
      <h3 id="profile_title"><b>회원 정보</b></h3>
      <hr></hr>
      <div class="mt-2" id="profile_content">
        <div>
            <p class="my-3 p-1 fs-4">
              <div>아이디</div><div>{user.email}</div>
            </p>
        </div>

        <div>
            <p class="my-3 p-1 fs-4">
              <div>생년월일</div><div>{user.birth}</div>
            </p>
        </div>

        <div>
          <p class="my-3 p-1 fs-4">
            <div>성명</div><div>{user.name}</div>
          </p>
        </div>

        <div>
          <p class="my-3 p-1 fs-4">
            <div>휴대폰 번호</div><div>{user.phone}</div>
          </p>
        </div>

        <div>
          <p class="my-3 p-1 fs-4">
            <div>주소</div><div>[{user.postcode}]&nbsp;&nbsp;{user.address1} {user.address2}</div>
          </p>
        </div>

        <div>
          <p class="my-3 p-1 fs-4">
            <div>가입일</div><div>{user.createdDate}</div>
          </p>
        </div>
      </div>

    </div>
  );
};

export default UserProfile;