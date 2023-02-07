import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Line from '../../components/line';
import OrderList from './OrderList/OrderList';
import MyInfoList from './MyInfoList/MyInfoList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function MyPage() {
  const [customerInfo, setCustomerInfo] = useState('');
  const [currentTab, setCurrentTab] = useState('');
  const [orderList, setOrderList] = useState('');
  const [reqAddOrderData, setReqAddOrderData] = useState({
    user_id: '',
    products: '',
    address: '',
    total_price: '',
    order_request: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/data/customerInfo.json').then(res => setCustomerInfo(res.data));
    axios.get('/data/orderLists.json').then(res => setOrderList(res.data));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5001/user/:userId')
  //     .then(res => setCustomerInfo(res.data));
  //   axios
  //     .get('http://localhost:5001/order/:userId')
  //     .then(res => setOrderList(res.data));
  // }, []);

  const reqAddOrderDataHandlers = e => {
    setReqAddOrderData({
      ...reqAddOrderData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <WelcomeMsg>
        <AccountIcon className="mat-icon" />
        <p>안녕하세요 {customerInfo.name} 고객님 </p>
        <p>오늘도 환영합니다!</p>
      </WelcomeMsg>
      <MenuTab>
        <ul className="tabs">
          <li onMouseDown={() => setCurrentTab('orderlist')}>주문내역</li>
          <li onMouseDown={() => setCurrentTab('myinfo')}>내 정보 관리</li>
        </ul>
      </MenuTab>
      <Subtitle>
        <p>최근 주문 내역</p>
        <Line widthLength="60%" />
      </Subtitle>
      {currentTab === 'orderlist' && (
        <ShowList>
          {orderList.length === 0 ? (
            '최근 주문내역이 없습니다.'
          ) : (
            <OrderList
              data={orderList}
              reqAddOrderData={reqAddOrderData}
              reqAddOrderDataHandlers={reqAddOrderDataHandlers}
            />
          )}
        </ShowList>
      )}
      {currentTab === 'myinfo' && (
        <ShowList>
          <MyInfoList datas={customerInfo} />
        </ShowList>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  margin-top: 90px;
  padding: 40px;
`;

const WelcomeMsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  > p {
    font-weight: 500;
  }
`;

const AccountIcon = styled(AccountCircleIcon)`
  color: rgba(153, 164, 151, 1);
  font-size: 1000px;
`;

const MenuTab = styled.div`
  width: 55%;
  margin: 70px auto;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  > .tabs {
    display: flex;
    > li {
      width: 100%;
      text-align: center;
      border: 1px solid #b1b1b1;
      padding: 20px;
      cursor: pointer;
      color: #b1b1b1;

      &:hover {
        font-wight: 900;
        border-bottom: none;
        color: black;
      }
    }
  }
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShowList = styled.div`
  padding: 30px;
  text-align: center;
`;
