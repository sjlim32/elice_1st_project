import React, { useRef } from 'react';
// import axios from 'axios';
import styled from 'styled-components';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nameRef = useRef();
  const contactRef = useRef();
  const addressRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    // await axios.post('', {
    //   email: emailRef.current.value,
    //   password: passwordRef.current.value,
    //   name: nameRef.current.value,
    //   contact: contactRef.current.value,
    //   address: addressRef.current.value,
    // });

    console.log(
      emailRef.current.value
      // passwordRef.current.value,
      // nameRef.current.value,
      // contactRef.current.value,
      // addressRef.current.value
    );
  };
  return (
    <Container>
      <MainTitle>
        <span>회원가입</span>
      </MainTitle>
      <UserInputContainer>
        <form onSubmit={submitHandler}>
          <label htmlFor="email">이메일</label>
          <input
            required
            ref={emailRef}
            id="email"
            type="email"
            name="email"
            autoComplete="off"
          />

          <label htmlFor="password">비밀번호</label>
          <input
            required
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
          />
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input
            required
            ref={confirmPasswordRef}
            id="confirmPassword"
            type="password"
            name="confirmPassword"
          />
          <label htmlFor="name">이름</label>
          <input required ref={nameRef} id="name" type="text" name="name" />
          <label htmlFor="contact">연락처</label>
          <input
            required
            ref={contactRef}
            id="contact"
            type="number"
            name="contact"
          />

          <label htmlFor="address">주소</label>
          <input
            required
            ref={addressRef}
            id="address"
            type="text"
            name="address"
          />
          <button>이메일로 회원가입</button>
        </form>
      </UserInputContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 90px;
  width: 100%;
  height: max-content;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.div`
  width: 40%;
  border-bottom: 10px solid rgba(153, 164, 151, 1);
  padding-bottom: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 25px;
  display: flex;
  justify-content: center;
`;

const UserInputContainer = styled.div`
  width: 40%;
  height: 70vh;
  background-color: #e8e8e8;
  border-radius: 15px;
  display: flex;
  justify-content: center;
`;
