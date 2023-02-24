import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Line from '../../components/line';
import StyledButton from '../../components/StyledButton';
import OrderList from './OrderList';
import API from '../../API';

function OrderPage() {
  const [item, setItem] = useState([]);
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    address: '',
    contact: '',
  });

  let totalprice = 0;
  item.forEach(i => {
    totalprice += i.price * i.count;
  });

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem('purchase');
    const parsedData = JSON.parse(dataFromLocalStorage);
    setItem(parsedData);
    console.log(item);
    if (localStorage.getItem('userData')) {
      const decoded = JSON.parse(localStorage.getItem('userData'));
      console.log('decoded', decoded._id);
      API.get(`/api/user/${decoded._id}`)
        .then(res => {
          console.log(res);
          setUser(prev => {
            return {
              ...prev,
              id: res.data.id,
              name: res.data.name,
              email: res.data.email,
              address: res.data.address,
              contact: res.data.contact,
            };
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const cartData = localStorage.getItem('cart');
    const parsedCartData = JSON.parse(cartData);

    if (localStorage.getItem('userData')) {
    try {
      await API.post(`/api/order`, {
        user_id: user.id,
        products: parsedCartData.map(i => i._id),
        address: user.address,
        total_price: totalprice,
      });
      alert(`${user.name}님의 상품 주문이 완료되었습니다.`);
    } catch (err) {
      console.log(`${err.response.data.message}`);
      alert('상품 주문에 실패하였습니다. 다시 시도해 주세요.');
    }
    }
  };

  const pay = ['가상계좌', '신용/체크카드', '토스페이', '네이버페이'];
  const userOrderInfo = ['이름', '연락처', '주소', '이메일'];

  return (
    <Wrap>
      <OrderHeading>주문/결제</OrderHeading>
      <InlineWrap>
        <CardWrap width="50%">
          <OrderCard height="40vh">
            <OrderCardColor>
              <OrderboxText>결제수단</OrderboxText>
            </OrderCardColor>
            {pay.map(info => (
              <div key={info}>
                <StyledCheckbox name="pay" />
                <OrderboxInnerText>&nbsp;&nbsp;{info}</OrderboxInnerText>
              </div>
            ))}
          </OrderCard>
        </CardWrap>
        <CardWrap width="50%">
          <OrderCard height="40vh">
            <OrderCardColor>
              <OrderboxText>주문자 정보</OrderboxText>
            </OrderCardColor>
            <TextWrap>
              {userOrderInfo.map(info => (
                <TextMargin key={info}>
                  <PersonalOrderInnerText>{info}</PersonalOrderInnerText>
                </TextMargin>
              ))}
            </TextWrap>
            <TextWrap>
              <TextMargin>
                <OrderboxInnerText>{user.name}</OrderboxInnerText>
              </TextMargin>
              <TextMargin>
                <OrderboxInnerText>{user.contact}</OrderboxInnerText>
              </TextMargin>
              <TextMargin>
                <OrderboxInnerText>{user.address}</OrderboxInnerText>
              </TextMargin>
              <TextMargin>
                <OrderboxInnerText>{user.email}</OrderboxInnerText>
              </TextMargin>
            </TextWrap>
          </OrderCard>
        </CardWrap>
        <CardWrap width="100%">
          <OrderCard height="100vh">
            <OrderCardColor>
              <OrderboxText>주문상품/금액</OrderboxText>
            </OrderCardColor>
            <PicWrap>
              <TextWrap>
                <div>
                  <OrderList ordereditem={item} />
                </div>
              </TextWrap>
            </PicWrap>
            <Line widthLength="120vh" />

            <TextWrap>
              <TotalPriceText>총{item.length}개</TotalPriceText>
            </TextWrap>
            <TextWrap>
              <TotalPriceText>{totalprice}KRW</TotalPriceText>
            </TextWrap>
            <div>
              <PayButton onClick={handleSubmit} padding="10vh">
                결제하기
              </PayButton>
            </div>
          </OrderCard>
        </CardWrap>
      </InlineWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const InlineWrap = styled.div`
  display: block;
  font-size: 0;
  margin: 0 60px;
`;

const CardWrap = styled.div`
  display: inline-block;
  width: ${props => props.width};
  padding: 0 3vh 0 3vh;
  vertical-align: middle;
  box-sizing: border-box;
`;

const OrderCard = styled.div`
  height: ${props => props.height};
  font-size: initial;
  background: rgba(217, 217, 217, 1);
  border-radius: 20px;
  margin: 5vh 0 0 0;
`;

const OrderCardColor = styled.div`
  height: 10vh;
  background-color: rgba(153, 164, 151, 1);
  border-radius: 20px 20px 0 0;
`;

const OrderHeading = styled.div`
  margin: 8vh 0 0 8vh;
  font-size: 30px;
  font-weight: 600;
`;

const OrderboxText = styled.p`
  font-size: 1.4em;
  font-weight: 500;
  padding: 3.5vh 0 0 3vh;
`;

const StyledCheckbox = styled.input.attrs(props => ({
  type: 'radio',
}))`
  width: 20px;
  height: 20px;
  border: 1px solid #999;
  margin: 3vh 0 0 4vh;
`;

const OrderboxInnerText = styled.label`
  font-size: 1.2em;
`;

const PersonalOrderInnerText = styled(OrderboxInnerText)`
  margin-left: 5vh;
  font-weight: 600;
`;

const TextWrap = styled.div`
  float: left;
  margin: 0 10vh 0 0;
  text-align: center;
`;

const TextMargin = styled.div`
  margin: 4vh 0 0 0;
`;

const PicWrap = styled.div`
  padding: 10vh 0 0 13vh;
  display: block;
`;

const PayButton = styled(StyledButton)`
  margin: 3vh 0 0 50vh;
`;

const TotalPriceText = styled.p`
  margin: 2vh 0 0 35vh;
  font-weight: 600;
  font-size: 1.2em;
`;

export default OrderPage;
