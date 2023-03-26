import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import apis from '../axios/api';
import { cookies } from '../shared/cookies';

function Login() {
  const navi = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    setUser((pre) => {
      return {...pre, [name]: value} ;
    });
  };

const submitButtonHandler = async (event) => {
  event.preventDefault();
  // 서버에 보내기 (POST요청)
//   await apis.post("/users/login", user);
// };

  // 쿠키박기 (위에거는 지우고)
  const result = await apis.post("/user/login", user);
  cookies.set("token", result.data.token, {path: "/"})
  console.log(user);
  };

  // 쿠키가 있는지 확인, 쿠키가 있으면 home으로 보내기
  // useEffect(()=> {
  //   const token = cookies.get("token");
  //   // console.log(token);
  //   if(token) {
  //     navi("/home")
  //   }
  // }, []);









  return (
  <>
    <section>
        <form onSubmit={submitButtonHandler}>
            <div>
                <LogoLinkWrapper>
                  <LogoImage src="yeoki_logo.png" alt="로고 이미지" />
                    <LogoLink href="https://www.goodchoice.kr/" />
                </LogoLinkWrapper>
            </div>

            <button type="button">
              <span>
              카카오톡으로 로그인
              </span>
            </button>

            <br/>

            <button type="button">
              <span>
                Face북으로 로그인
              </span>
            </button>

            <br/>

            <a href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=r3Mjf4OpPMMq8Lib0JKw&redirect_uri=https%3A%2F%2Fwww.goodchoice.kr%2Fuser%2FnaverLoginProcess&state=a27591363b21ea2fb56a59b71711600e">
              <span>
                네이버로 로그인
              </span>
            </a>

            <p>
              <span>
                또는
              </span>
            </p>

            <div>
                <input 
                name="email"
                type="email" 
                placeholder="이메일 주소" 
                required
                data-msg-required="이메일 주소를 입력해 주세요."
                aria-invalid="true" 
                value={user.email}
                onChange={changeInputHandler}
                />
                <label>이메일 주소를 입력해 주세요.</label>
            </div>

            <div>
                <input 
                name="password"
                type="password" 
                placeholder="비밀번호"
                required
                data-msg-required="비밀번호를 입력해 주세요."
                aria-invalid="true" 
                value={user.password}
                onChange={changeInputHandler} 
                />
                <label>비밀번호를 입력해 주세요.</label>
            </div>

            <button 
            type="submit">
                <span>로그인</span>
            </button>
            <div>
                <div>
                    <a>
                        <span>비밀번호 재설정</span>
                    </a>
                </div>
                <div>
                    <button 
                    onClick={() => navi("/register")}
                    type="button"
                    >
                        <span>회원가입</span>
                    </button>
                </div>
            </div>
        </form>
    </section>
  </>
  )

}

export default Login
const LogoLinkWrapper = styled.strong`
  z-index: 1;
`;

const LogoImage = styled.img`
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
`;

const LogoLink = styled.a`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  `;