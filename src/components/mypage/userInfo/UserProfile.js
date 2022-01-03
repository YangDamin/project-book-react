import React from 'react';


const UserProfile = () => {
  return (
    <div class="col-lg-6" id="contents">
      <h3> My Profile</h3>

      <div class="mt-3  bg-light bg-gradient">
        <div>
          <label>
            <p class="my-3 p-1 fs-4 "><b class="text-black-60">아이디 :</b><span>&nbsp;&nbsp;아이디~</span>
            </p>
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

export default UserProfile;