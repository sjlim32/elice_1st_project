import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function OrderList({
  data,
  reqAddOrderData,
  reqAddOrderDataHandlers,
}) {
  const [orderData, setOrderData] = useState();
  const [isToUpdate, setIsToUpdate] = useState(false);

  const addOrderHandler = () => {
    setIsToUpdate(true);
    axios
      .post('http://localhost:3000', reqAddOrderData)
      .then(res => setOrderData(res.data));
  };

  const updateOrderHandler = () => {
    axios
      .patch('http://localhost:3000', reqAddOrderData) // path에 orderid추가하기
      .then(res => setOrderData(res.data));
  };

  const cancelOrderHandler = () => {
    axios
      .delete('http://localhost:3000', reqAddOrderData) // path에 orderid추가하기
      .then(res => setOrderData(res.data));
  };

  return (
    <Container>
      <div>
        {data.map(el => (
          <div key={el.order_id}>
            <p>{el.products}</p>
            {isToUpdate && (
              <input name="product" onChange={reqAddOrderDataHandlers()} />
            )}
            <p>{el.total_price}</p>
            <p>{el.date}</p>
          </div>
        ))}
      </div>
      <button onClick={addOrderHandler}>주문추가하기</button>
      <button onClick={updateOrderHandler}>주문수정하기</button>
      <button onClick={cancelOrderHandler}>주문취소하기</button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: #efefef;
`;

const SubTitles = styled.div`
  width: 70%;
  margin: 10px auto;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  > .tabs {
    display: flex;
    > li {
      width: 100%;
      text-align: center;
      border-right: 1px solid #b1b1b1;
      cursor: pointer;
      color: #b1b1b1;
      &:last-child {
        border-right: none;
      }

      &:hover {
        font-wight: 900;
        color: black;
      }
    }
  }

  > .contents {
    text-align: center;
    font-size: 70px;
    border-top: none;
    color: black;
  }
`;
