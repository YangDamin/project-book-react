import React, { useState } from 'react';
import { Button, Col, Input, Row, } from 'antd'
import "antd/dist/antd.css";
import styles from "./Signup.module.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import DaumPostcode from "react-daum-postcode";


const Signup = () => {
  const [address, setAddress] = useState(''); // 주소
  const [addressDetail, setAddressDetail] = useState(''); // 상세주소

  const [isOpenPost, setIsOpenPost] = useState(false);

  const onCompletePost = (data) => {
    let fullAddr = data.address;
    let extraAddr = '';
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }

    setAddress(data.zonecode);
    setAddressDetail(fullAddr);
    setIsOpenPost(false);
  };  

  const postCodeStyle = {

    display: 'block',
    position: 'relative',
    top: '0%',
    width: '500px',
    height: '500px',
    padding: '7px',
  };

  // var win = window.open("/user.html", "PopupWin", "width=500,height=600");

  // win.document.write(postCodeStyle);

  return (
    <Row align="middle" className={styles.signup_row}>
      <Col span={24}>
        <Row className={styles.signup_contents}>
          <Col span={15}>
            <div className={styles.signup_title}>회원가입</div>
            <div className={styles.email_title}>
              Email
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} placeholder="email" type="email" autoComplete="email" name="email" id="email"></Input>
            </div>
            <div className={styles.password_title}>
              Password
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} placeholder="password" type="password" autoComplete="current" name="password" id="password"></Input>
            </div>
            <div className={styles.password_title}>
              Birth
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} placeholder="birth" type="date" autoComplete="current" name="birth" id="birth"></Input>
            </div>
            <div className={styles.password_title}>
              Name
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} placeholder="name" type="name" autoComplete="current" name="name" id="name"></Input>
            </div>
            <div className={styles.password_title}>
              Phone
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} placeholder="phone" type="phone" autoComplete="current" name="phone" id="phone"></Input>
            </div>
              <div className={styles.password_title}>
                Postcode
              <span className={styles.required}>*</span>
              </div>
              <div className={styles.input_area}>
              <Input className={styles.input} placeholder="우편번호(주소검색버튼)" readonly value={address} type="postcode"  autoComplete="current" name="postcode" id="sample4_postcode" ></Input>
              </div>          
            <div className={styles.password_title}>
              Address
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} placeholder="주소(주소검색버튼)" readonly value={addressDetail} type="address1" autoComplete="current" name="address1" id="sample5_address1" ></Input>
            </div>
            <div className={styles.button_area}>
              <Button className={styles.button} size='large' onClick={(e) => {
                setIsOpenPost(true);
              }} >주소검색</Button>
            </div>
            {isOpenPost  ? (
              <DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost } />
            ) : null}
            <div className={styles.password_title}>
              Address2
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} placeholder="상세주소" type="address2" autoComplete="current" name="address2" id="sample5_address2" ></Input>
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
                formData.append('postcode', document.querySelector('[name=postcode]').value);
                formData.append('address1', document.querySelector('[name=address1]').value);
                formData.append('address2', document.querySelector('[name=address2]').value);
                axios({
                    url:'http://localhost:8080/user/signup',
                    method: 'post',
                    data: formData
                }).then((res) => {
                    console.log(res.data);

                    if(res.data.code != 200) {
                        // alert('🤦‍♂️회원가입 승인불가🤦‍♂️');
                    } else {
                        // alert('👊회원가입 완료👊');
                    }
                });
              }}><Link to="/">회원가입</Link></Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>

  );
};

export default Signup;