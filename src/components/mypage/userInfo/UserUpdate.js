import React from 'react';


const UserUpdate = () => {
  return (
    <div class="col-lg-6">
      <h4 class="mb-3">회원 정보 수정</h4>
      <form class="needs-validation" novalidate="">
        <div class="row">
          <div className="mb-3">
            <label for="name">이름</label>
            <input type="text" class="form-control" id="name" placeholder="" value="한국표준" required readOnly />
            <div class="invalid-feedback"> Valid first name is required. </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="email">Email <span class="text-muted">(User ID)</span></label>
          <input type="email" class="form-control" id="email" value="you@example.com" readOnly />
          <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
        </div>
        <div class="mb-1">
          <label for="password">Password <span class="text-muted"></span></label>
          <input type="password" class="form-control" id="password" placeholder="" />
          <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
        </div>
        <div class="mb-3">
          <label for="password_check">Password <span class="text-muted">(Check)</span></label>
          <input type="password" class="form-control" id="password_check" placeholder="" />
          <div class="invalid-feedback"> Please enter a valid password. </div>
        </div>

        <div class="mb-3">
          <label for="birth">Birth <span class="text-muted"></span></label>
          <input type="date" class="form-control" id="birth" readOnly value="2021-01-03" />
          <div class="invalid-feedback"> Please enter a valid birth </div>
        </div>
        <div class="mb-3">
          <label for="phone">Phone <span class="text-muted"></span></label>
          <input type="tel" class="form-control" id="phone" placeholder="02-803-1234" />
          <div class="invalid-feedback"> Please enter a valid phone number for shipping updates. </div>
        </div>

        <div class="mb-3">
          <label for="address">Address</label>
          <input type="text" class="form-control" id="address" placeholder="금천구 가산디지털단지역" required />
          <div class="invalid-feedback"> Please enter your shipping address. </div>
        </div>
        <div class="mb-3">
          <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
          <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
        </div>
        <div class="row">
          <div class="col-md-3 mb-3">
            <label for="post_code">Post Code</label>
            <input type="text" class="form-control" id="post_code" placeholder="" required />
            <div class="invalid-feedback"> Post Code required. </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserUpdate;