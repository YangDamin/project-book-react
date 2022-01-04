import axios from 'axios';
import React, { useEffect, useState } from 'react';


const UserUpdate = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const result = axios({
      url: 'http://localhost:8080/mypage/userUpdate',
      method: 'get',
      params: { userId: 'phyw1129@naver.com', userPassword: 1234 }
    });
    result.then((res) => {
      console.log(res);
      console.log(res.data);
      setUser(res.data);
    });
  }, []);//deps
  return (
    <div class="col-lg-6">
      <div className="row">
        <div className="col-lg-4">
          <h4 class="mb-3">회원 정보 수정</h4>
        </div>
        <div className="col-lg-6"></div>
        <div className="col-lg-2">
          <button type="button" className="btn-lg btn-outline-secondary"
            onClick={() => {
              const formData = new FormData();
              formData.append("userId", "phyw1129@naver.com");
              formData.append("userPassword", "1234");
              formData.append("password", document.getElementById("password").value);
              formData.append("phone", document.getElementById("phone").value);
              formData.append("address", document.getElementById("address").value);
              const result = axios({
                url: 'http://localhost:8080/mypage/userUpdate',
                method: 'post',
                data: formData
              });
              result.then((res) => {
                console.log(res);
                console.log(res.data);

              });
            }}>변경하기</button>
        </div>
      </div>

      <form class="needs-validation" novalidate="">
        <div class="row">
          <div className="mb-3">
            <label for="name">이름</label>
            <input type="text" class="form-control" id="name" placeholder="" value={user.name} required
              onChange={(e) => { document.getElementById("name").value = e.target.value }} />
            <div class="invalid-feedback"> Valid first name is required. </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="email">Email <span class="text-muted">(User ID)</span></label>
          <input type="email" class="form-control" id="email" value={user.email} readOnly />
          <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
        </div>
        <div class="mb-1">
          <label for="password">Password <span class="text-muted"></span></label>
          <input type="password" class="form-control" id="password" onChange={(e) => { document.getElementById("password").value = e.target.value }} />
          <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
        </div>
        <div class="mb-3">
          <label for="password_check">Password <span class="text-muted">(Check)</span></label>
          <input type="password" class="form-control" id="password_check" onChange={(e) => { document.getElementById("password_check").value = e.target.value }} />
          <div class="invalid-feedback"> Please enter a valid password. </div>
        </div>

        <div class="mb-3">
          <label for="birth">Birth <span class="text-muted"></span></label>
          <input type="date" class="form-control" id="birth" readOnly value={user.birth} />
          <div class="invalid-feedback"> Please enter a valid birth </div>
        </div>
        <div class="mb-3">
          <label for="phone">Phone <span class="text-muted"></span></label>
          <input type="tel" class="form-control" id="phone" value={user.phone} onChange={(e) => { document.getElementById("phone").value = e.target.value }} />
          <div class="invalid-feedback"> Please enter a valid phone number for shipping updates. </div>
        </div>

        <div class="mb-1">
          <label for="address">Address</label>
          <input type="text" class="form-control" id="address" value={user.address} required onChange={(e) => { document.getElementById("address").value = e.target.value }} />
          <div class="invalid-feedback"> Please enter your shipping address. </div>
        </div>
        <div class="mb-1">
          <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
          <input type="text" class="form-control" id="address2" value={user.address} required onChange={(e) => { document.getElementById("address2").value = e.target.value }} />
        </div>
        <div class="col-md-3 mb-5">
          <label for="post_code">Post Code</label>
          <input type="text" class="form-control" id="post_code" placeholder="" required />
          <div class="invalid-feedback"> Post Code required. </div>
        </div>
      </form>
    </div>
  );
};

export default UserUpdate;