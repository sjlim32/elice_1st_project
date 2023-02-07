import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function OrderList() {
  const [orderData, setOrderData] = useState();

  const reqAddOrderData = {
    user_id: '',
    products: '',
    address: '',
    total_price: '',
    order_request: '',
  };
  const addOrderHandler = () => {
    axios
      .post('http://localhost:3000', reqAddOrderData)
      .then(res => setOrderData(res.data));
  };

  const updateOrderHandler = () => {
    axios
      .post('http://localhost:3000', reqAddOrderData)
      .then(res => setOrderData(res.data));
  };

  const cancelOrderHandler = () => {
    axios
      .post('http://localhost:3000', reqAddOrderData)
      .then(res => setOrderData(res.data));
  };

  return (
    <div>
      <button onClick={addOrderHandler}>주문추가하기</button>
      <button onClick={updateOrderHandler}>주문수정하기</button>
      <button onClick={cancelOrderHandler}>주문취소하기</button>
    </div>
  );
}
