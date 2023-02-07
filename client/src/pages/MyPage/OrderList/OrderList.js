import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function OrderList({ data, reqAddOrderData }) {
  const [orderData, setOrderData] = useState();

  const addOrderHandler = () => {
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
    <div>
      <div>
        {data.map(el => (
          <div key={el.order_id}>
            <p>{el.products}</p>
            <p>{el.total_price}</p>
            <p>{el.date}</p>
          </div>
        ))}
      </div>
      <button onClick={addOrderHandler}>주문추가하기</button>
      <button onClick={updateOrderHandler}>주문수정하기</button>
      <button onClick={cancelOrderHandler}>주문취소하기</button>
    </div>
  );
}
