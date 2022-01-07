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


    <div class="container h-100">
    		<div class="row h-100">
				<div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div class="d-table-cell align-middle">

						<div class="text-center mt-4">
							<h1 class="h2 mt-5 mb-4">회원 가입</h1>
						</div>

						<div class="card">
							<div class="card-body">
								<div class="m-sm-4">
									<form>
										<div class="form-group">
											<label>Name</label><span className={styles.required}>*</span>
											<input class="form-control form-control-lg" type="text" name="name" placeholder="Enter your name" required>
										</input></div>
                  
										<div class="form-group">
											<label>Email</label><span className={styles.required}>*</span>
											<input class="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" required>
										</input>
                    </div>
                    <div class="form-group">
											<label>Password</label>
											<input class="form-control form-control-lg" type="password" name="password" placeholder="Enter password" required>
										</input>
                    </div>
										<div class="form-group">
											<label>birth</label><span className={styles.required}>*</span>
											<input class="form-control form-control-lg" placeholder="birth" type="date" autoComplete="current" name="birth" id="birth" required>
										</input>
                    </div>
                    <div class="form-group">
											<label>phone</label><span className={styles.required}>*</span>
											<input class="form-control form-control-lg" type="phone" name="phone" placeholder="Enter your phone" required>
										</input>
                    </div>
                    <div class="form-group">
											<label>Postcode</label><span className={styles.required}>*</span>
											<input class="form-control form-control-lg" placeholder="우편번호(주소검색버튼)" readonly value={address} type="postcode"  autoComplete="current" name="postcode" id="sample4_postcode" required>
										</input>
                    </div>
                    <div class="form-group">
											<label>Address</label><span className={styles.required}>*</span>
											<input class="form-control form-control-lg" placeholder="주소(주소검색버튼)" readonly value={addressDetail} type="address1" autoComplete="current" name="address1" id="sample5_address1" required>
										</input>
                    </div>
                    <div className={styles.button_area}>
                    <Button className={styles.button} size='large' onClick={(e) => {
                     setIsOpenPost(true);
                     }} >주소검색</Button>
                     </div>
                      {isOpenPost  ? (
                      <DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost } />
                       ) : null}

                      <div class="form-group">
											<label>Address2</label><span className={styles.required}>*</span>
											<input class="form-control form-control-lg" placeholder="상세주소" type="address2" autoComplete="current" name="address2" id="sample5_address2" required>
							  			</input>
                      </div>
     
										
										
                    <div className={styles.button_area}>
                 <Button className={styles.button} size="large" onClick={(e) => {
                    e.preventDefault();
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
                        alert('🤦‍♂️회원가입 승인불가🤦‍♂️');
                    } else {
                        alert('👊회원가입 완료👊');
                    }
                });
              }}>회원가입</Button>
            </div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>

  );
};

export default Signup;