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
      <OrderInfos>
        {data.map(el => (
          <div className="order" key={el.order_id}>
            <Infos>
              <ul className="tabs">
                <li>상품</li>
                <li>주문 날짜</li>
                <li>주문 정보</li>
                <li>상태</li>
              </ul>
            </Infos>
            <Infos>
              <ul className="tabs">
                <li className="each-item">{el.products}</li>
                {isToUpdate && (
                  <input name="product" onChange={reqAddOrderDataHandlers()} />
                )}
                <li className="each-item">{el.total_price}</li>
                <li className="each-item">{el.date}</li>
                <li className="each-item">{el.status}</li>
              </ul>
            </Infos>
          </div>
        ))}
      </OrderInfos>
      <button onClick={addOrderHandler}>주문추가하기</button>
      <button onClick={updateOrderHandler}>주문수정하기</button>
      <button onClick={cancelOrderHandler}>주문취소하기</button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
const OrderInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > .order {
    margin-top: 20px;
    padding: 15px;
    height: 180px;
    width: 60%;
    border-radius: 20px;
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

const Infos = styled.div`
  width: 100%;
  margin: 10px auto;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  > .tabs {
    display: flex;
    > li {
      width: 100%;
      text-align: center;
      border-right: 2px solid #373837;
      color: #373837;
      &:last-child {
        border-right: none;
      }
    }
    > .each-item {
      border: none;
      font-weight: 600;
    }
  }

  > .contents {
    text-align: center;
    font-size: 70px;
    border-top: none;
    color: black;
  }
`;
