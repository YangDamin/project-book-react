import React from 'react';
import SideMenu from './SideMenu';

const EditProfile = () => {
  return (
    <div class="col-lg-7" id="contents">
      <h3 class="text-center">My Profile</h3>
      <div class="mt-3">
        <div>
          <label>
            <p class="my-3 p-1 fs-4 "><b class="text-black-60">아이디 :</b><span>&nbsp;&nbsp;아이디~</span></p>
          </label>
        </div>
        <label>
          <p class="my-3 p-1 fs-4"><b class="text-black-60">생년월일 :</b><span>&nbsp;&nbsp;
            2021-01-03
          </span></p>
        </label>
        <br />
        <label>
          <p class="my-3 p-1 fs-4"><b class="text-black-60">이름 :</b><span>&nbsp;&nbsp;한국 표준</span></p>
        </label>
        <br />
        <label>
          <p class="my-3 p-1 fs-4"><b>휴대전화 번호 :</b><span class="fs-4">&nbsp;&nbsp;010-1234-5678</span></p>
        </label>
        <br />
        <label>
          <p class="my-3 p-1 fs-4"><b>주소 :</b></p>
          <span class="fs-4">&nbsp;&nbsp;서울특별시 금천구 가산디지털단지역</span>
        </label>
        <br />
        <label>
          <p class="my-3 p-1 fs-4"><b>가입일 :</b><span class="fs-4">&nbsp;&nbsp;
            가입일
          </span></p>
        </label>
      </div>
    </div>
  );
};


const UserUpdate = () => {
  return (
    <div class="row">
      <div class="col-lg-3 bg-light bg-gradient m-5 border border-primary ">
        <nav class="text-center">
          <ul class="list-unstyled ">
            <li class="pt-4">
              <button class="btn btn-light">
                <span class="h4">회원정보조회&nbsp;&nbsp;<i class="fas fa-address-book"></i></span>
              </button>
            </li>
            <li class="pt-4">
              <button class="btn btn-light">
                <span class="h4">회원정보수정&nbsp;&nbsp;<i class="far fa-address-book"></i></span>
              </button>
            </li>
            <li class="pt-3 border-bottom-0">
              <button class="btn btn-light">
                <span class="h4">회원탈퇴&nbsp;&nbsp;<i class="fas fa-user-times"></i></span>
              </button>
            </li>


            <li class="pt-5">
              <button class="btn btn-light">
                <span class="h4">장바구니 목록&nbsp;&nbsp;<i class="fas fa-shopping-cart"></i></span>
              </button>
            </li>
            <li class="pt-3">
              <button class="btn btn-light">
                <span class="h4">주문 내역&nbsp;&nbsp;<i class="fas fa-shopping-basket"></i></span>
              </button>
            </li>


            <li class="pt-5 pb-5">
              <button class="btn btn-light">
                <span class="h4">독서노트&nbsp;&nbsp;<i class="far fa-clipboard"></i></span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-lg-7" id="contents">


        <h3 class="text-center">My Profile</h3>

        <div class="mt-3">
          <div>
            <label>
              <p class="my-3 p-1 fs-4 "><b class="text-black-60">아이디 :</b><span>&nbsp;&nbsp;아이디~</span></p>
            </label>
          </div>


          <label>
            <p class="my-3 p-1 fs-4"><b class="text-black-60">생년월일 :</b><span>&nbsp;&nbsp;
              2021-01-03
            </span></p>

          </label>
          <br />
          <label>
            <p class="my-3 p-1 fs-4"><b class="text-black-60">이름 :</b><span>&nbsp;&nbsp;한국 표준</span></p>
          </label>
          <br />
          <label>
            <p class="my-3 p-1 fs-4"><b>휴대전화 번호 :</b><span class="fs-4">&nbsp;&nbsp;010-1234-5678</span></p>
          </label>
          <br />
          <label>
            <p class="my-3 p-1 fs-4"><b>주소 :</b></p>
            <span class="fs-4">&nbsp;&nbsp;서울특별시 금천구 가산디지털단지역</span>
          </label>
          <br />
          <label>
            <p class="my-3 p-1 fs-4"><b>가입일 :</b><span class="fs-4">&nbsp;&nbsp;
              가입일
            </span></p>

          </label>
        </div>


      </div>
    </div>
  );
};

export default UserUpdate;