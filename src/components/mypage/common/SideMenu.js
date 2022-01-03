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
                <span class="h4">회원정보조회&nbsp;&nbsp;<i class="fas fa-address-book"></i></span>
              </button>
            </NavLink>
          </li>
          <li class="pt-4">
            <NavLink to="/mypage/userUpdate">
              <button class="btn btn-light">
                <span class="h4">회원정보수정&nbsp;&nbsp;<i class="far fa-address-book"></i></span>
              </button>
            </NavLink>
          </li>
          <li class="pt-3 border-bottom-0">
            <NavLink to="/mypage/userQuit">
              <button class="btn btn-light">
                <span class="h4">회원탈퇴&nbsp;&nbsp;<i class="fas fa-user-times"></i></span>
              </button>
            </NavLink>
          </li>


          <li class="pt-5">
            <NavLink to="/mypage/cart/list">
              <button class="btn btn-light">
                <span class="h4">장바구니 목록&nbsp;&nbsp;<i class="fas fa-shopping-cart"></i></span>
              </button>
            </NavLink>
          </li>
          <li class="pt-3">
            <NavLink to="/mypage/order/list">
              <button class="btn btn-light">
                <span class="h4">주문 내역&nbsp;&nbsp;<i class="fas fa-shopping-basket"></i></span>
              </button>
            </NavLink>
          </li>


          <li class="pt-5 pb-5">
            <NavLink to="/mypage/diary">
              <button class="btn btn-light">
                <span class="h4">독서노트&nbsp;&nbsp;<i class="far fa-clipboard"></i></span>
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;