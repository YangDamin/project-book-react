import React from 'react';
import { NavLink } from 'react-router-dom';

const SideMenu = () => {
  return (
    <div class="col-lg-3 bg-light bg-gradient m-5 border border-dark">
      <nav class="text-center">
        <ul class="list-unstyled ">
          <li class="pt-4">
            <NavLink to="/mypage/userProfile">
              <button class="btn btn-light">
                <span class="h3">회원정보조회&nbsp;&nbsp;<i class="fas fa-address-book"></i></span>
              </button>
            </NavLink>
          </li>
          <li class="pt-4">
            <NavLink to="/mypage/userUpdate">
              <button class="btn btn-light">
                <span class="h3">회원정보수정&nbsp;&nbsp;<i class="far fa-address-book"></i></span>
              </button>
            </NavLink>
          </li>
          <li class="pt-3 border-bottom-0">
            <NavLink to="/mypage/userQuit">
              <button class="btn btn-light">
                <span class="h3">회원탈퇴&nbsp;&nbsp;<i class="fas fa-user-times"></i></span>
              </button>
            </NavLink>
          </li>


          <li class="pt-5">
            <NavLink to="/mypage/cart/list">
              <button class="btn btn-light">
                <span class="h3">장바구니 목록&nbsp;&nbsp;<i class="fas fa-shopping-cart"></i></span>
              </button>
            </NavLink>
          </li>
          <li class="pt-3">
            <NavLink to="/mypage/order/list">
              <button class="btn btn-light">
                <span class="h3">주문 내역&nbsp;&nbsp;<i class="fas fa-shopping-basket"></i></span>
              </button>
            </NavLink>
          </li>


          <li class="pt-5 pb-5">
            <NavLink to="/mypage/diary">
              <button class="btn btn-light">
                <span class="h3">독서노트&nbsp;&nbsp;<i class="far fa-clipboard"></i></span>
              </button>
            </NavLink>
            <br />
            <div class="btn-group mt-3" role="group" aria-label="Basic outlined example">
              <NavLink to="/mypage/diary/list"><button type="button" class="btn btn-outline-dark">목록 보기</button></NavLink>
              <NavLink to="/mypage/diary/write"><button type="button" class="btn btn-outline-dark">작성 하기</button></NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;