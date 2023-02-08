import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function UpdateInfoModal({ setIsToUpdate, orderId }) {
  const [inputValue, setInputValue] = useState({
    phone: '',
    address: '',
  });

  const inputhandler = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  console.log(inputValue);

  const submitHandler = () => {
    alert('수정이 완료되었습니다');
    axios.patch(`http://localhost:5001/order/${orderId}`, inputValue);
    setIsToUpdate(false);
  };
  return (
    <Modal>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">주소</label>
          <div className="form-field">
            <input
              required
              id="address"
              type="text"
              name="address"
              onChange={inputhandler}
              placeholder="새로운 배송지 주소를 입력해주세요"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">연락처</label>
          <div className="form-field">
            <input
              required
              id="phone"
              type="text"
              name="phone"
              onChange={inputhandler}
              placeholder="배송받으실 분의 연락처를 입력해주세요"
            />
          </div>
        </div>
        <button>수정완료</button>
      </form>
    </Modal>
  );
}

const Modal = styled.div`
  width: 100%;
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > form {
    margin-top: 20px;
    padding: 15px;
    height: 180px;
    width: 50%;
    border-radius: 20px;
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    > div {
      display: flex;
      width: 400px;
      flex-direction: row;
      justify-content: space-around;
      align-items: space-around;
      > .form-field {
        > input {
          width: 300px;
        }
      }
    }
  }
`;
