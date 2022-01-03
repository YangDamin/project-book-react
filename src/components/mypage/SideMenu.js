import React from 'react';

const SideMenu = () => {
  return (
    <div>
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
    </div>
  );
};

export default SideMenu;