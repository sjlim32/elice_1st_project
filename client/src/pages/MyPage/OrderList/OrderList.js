import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UpdateInfoModal from './UpdateInfoModal';

export default function OrderList({ data }) {
  const [orderData, setOrderData] = useState();
  const [isToUpdate, setIsToUpdate] = useState(false);

  const updateOrderHandler = () => {
    setIsToUpdate(true);
  };

  const cancelOrderHandler = () => {
    axios
      .delete(`http://localhost:5001/order/${data.order_id}`) // path에 orderid추가하기
      .then(() => alert('주문이 취소되었습니다.'));
  };

  return (
    <Container>
      <NewButton onClick={updateOrderHandler}>배송지 정보 수정하기</NewButton>
      <OrderInfos>
        {data.map(el => (
          <div className="order" key={el.order_id}>
            <Infos>
              <ul className="tabs">
                <li>상품</li>
                <li>총 가격</li>
                <li>주문 날짜</li>
                <li>배송 상태</li>
                <li>주문 취소</li>
              </ul>
            </Infos>
            <Infos>
              <ul className="tabs">
                <li className="each-item">{el.products}</li>
                <li className="each-item">
                  {el.total_price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </li>
                <li className="each-item">{el.date}</li>
                <li className="each-item">{el.status}</li>
                <li>
                  <StyledButton
                    disabled={el.status === '배송완료' ? true : false}
                    width="70px"
                    onClick={cancelOrderHandler}
                  >
                    주문 취소
                  </StyledButton>
                </li>
              </ul>
            </Infos>
          </div>
        ))}
      </OrderInfos>
      {isToUpdate ? (
        <UpdateInfoModal
          setIsToUpdate={setIsToUpdate}
          orderId={data.order_id}
        />
      ) : (
        ''
      )}
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
  position: relative;
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
    justifycontent: space-around;
    align-items: center;
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

const StyledButton = styled.button`
  background-color: rgba(153, 164, 151, 1);
  color: rgb(59, 59, 59);
  font-size: 15px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  height: 30px;
  padding: 5px;
  width: ${props => props.width};
  text-align: center;
  transition: 0.25s;
  &:hover {
    cursor: pointer;
    background-color: gray;
    color: white;
  }
`;

const NewButton = styled(StyledButton)`
  color: rgb(59, 59, 59);
  background-color: white;
  width: 200px;
  border: 1px solid rgba(153, 164, 151, 1);
`;
