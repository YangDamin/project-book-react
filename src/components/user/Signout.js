import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Signout = () => {

  console.log('로그아웃 페이지');
  const navigate = useNavigate();
  useEffect(() => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
    navigate("/");
  }, []);

  return (
    <div>

    </div>
  );
};

export default Signout;