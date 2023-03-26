import axios from 'axios';
import React, { useState } from 'react'
import apis from '../axios/api';

function Register() {
    
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
        privacyTerm : true,
        marketingTerm: true,
        gpsTerm : true
    });
    
    const changeInputHandler = (event) => {
        const { value, name } = event.target;
        setUser((pre) => {
            return {...pre, [name]: value} ;
        });
    };

    const submitButtonHandler = (event) => {
        event.preventDefault();
        // 서버에 보내기 (POST요청)
        axios.post("http://54.180.144.151/users/signup", user);
        console.log(user);
    };


    return (
    <>
    <section>
        <form onSubmit={submitButtonHandler}>
            <div>
                <h1>
                    <a href="https://www.goodchoice.kr/">여기어때</a>
                </h1>
            </div>
            <div>
                <strong>회원가입</strong>

                <br/>

                <b>이메일 아이디</b>
                <div>
                    <input 
                    name="email"
                    type="email" 
                    placeholder="이메일 주소를 입력해주세요."
                    value={user.email}
                    onChange={changeInputHandler}
                    />
                    <label>이메일 주소를 입력해주세요.</label>
                </div>

                <b>비밀번호</b>
                <div>
                    <input 
                    name="password"
                    type="password" 
                    placeholder="비밀번호를 입력해주세요."
                    value={user.password}
                    onChange={changeInputHandler} 
                    />
                    <label>비밀번호를 입력해주세요.</label>
                </div>

                <b>닉네임</b>
                <div>
                    <input 
                    name="username"
                    type="text"
                    value={user.username}
                    onChange={changeInputHandler} 
                    />
                    <label>추천 닉네임이에요!</label>
                    <button type="button">딴거할래요</button>
                </div>
                
                <button>
                    <span>가입하기</span>
                </button>
            </div>
        </form>
    </section>
    </>
    )
}

export default Register
