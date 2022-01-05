import React from 'react';
import { Button, Col, Input, Row } from 'antd'
import "antd/dist/antd.css";
import styles from "./Signup.module.css";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {
  const navigate = useNavigate();
  return (
    <Row align="middle" className={styles.signup_row}>
      <Col span={24}>
        <Row className={styles.signup_contents}>
          {/* Col 하나는 이미지, 하나는 로그인 폼 */}
          <Col span={12}>
            <div className={styles.signup_title}>회원가입</div>
            <div className={styles.email_title}>
              Email
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} placeholder="email" autoComplete="email" name="email" id="email"></Input>
            </div>
            <div className={styles.password_title}>
              Password
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} type="password" autoComplete="current" name="password" id="password"></Input>
            </div>
            <div className={styles.birth_title}>
              Birth
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} type="birth" autoComplete="current" name="birth" id="birth"></Input>
            </div>
            <div className={styles.name_title}>
              Name
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} type="name" autoComplete="current" name="name" id="name"></Input>
            </div>
            <div className={styles.phone_title}>
              Phone
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} type="phone" autoComplete="current" name="phone" id="phone"></Input>
            </div>
            <div className={styles.address_title}>
              Address
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} type="address" autoComplete="current" name="address" id="address"></Input>
            </div>
            <div className={styles.button_area}>
              <Button className={styles.button} size="large" onClick={(e) => {

                const email = document.querySelector('[name=email]').value;
                const formData = new FormData();
                formData.append('email', email);
                formData.append('password', document.querySelector('[name=password]').value);
                formData.append('birth', document.querySelector('[name=birth]').value);
                formData.append('name', document.querySelector('[name=name]').value);
                formData.append('phone', document.querySelector('[name=phone]').value);
                formData.append('address', document.querySelector('[name=address]').value);
                axios({
                    url:'http://localhost:8080/user/api/signup',
                    method: 'post',
                    data: formData
                }).then((res) => {
                    console.log(res.data);

                    if(res.data.code != 200) {
                        alert('회원가입 승인불가');
                    } else {
                        alert('회원가입 완료');
                    }
                });
              }}>회원가입</Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Signup;