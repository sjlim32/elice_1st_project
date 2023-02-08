import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ProductItem from './Cart';

function Cart() {
  const data = [
    {
      _id: '63e09b3f5d240411b3c6cedd',
      name: '상품 3',
      price: 1300,
      size: 'free',
      image: '이미지 3',
      count: 1,
    },

    {
      _id: '63e0aa360cf5b0896a027376',
      name: '상품 1',
      price: 1100,
      size: 'free',
      image: '이미지 1',
      count: 1,
    },

    {
      _id: '63e09d365d240411b3c6ceff',
      name: '상품 20',
      price: 12000,
      size: 'free',
      image: '이미지 20',
      count: 1,
    },
  ];
  localStorage.setItem('cart', JSON.stringify(data));

  const [productList, setProductList] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkItems, setCheckItems] = useState([]);

  const handleAllCheck = checked => {
    if (checked) {
      const idArray = [];
      productList.forEach(el => idArray.push(el._id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const deleteAll = () => {
    setProductList([]);
  };

  const handleOrder = () => {
    // axios.post(
    //   "http://localhost:5001/order",
    //   productList.filter((product) => checkItems.includes(product._id))
    // );
    console.log(
      '주문내역',
      productList.filter(product => checkItems.includes(product._id))
    );
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(productList));
    let count = 0;
    let price = 0;
    productList.forEach(product => {
      if (checkItems.includes(product._id)) {
        count += product.count;
        price += product.price * product.count;
      }
    });
    setTotalCount(count);
    setTotalPrice(price);
  }, [productList, checkItems]);
  return (
    <>
      <Title>장바구니</Title>
      <Container>
        <Info>
          <Checkbox
            type="checkbox"
            checked={checkItems.length === productList.length}
            onChange={e => {
              handleAllCheck(e.target.checked);
            }}
          />
          <Item>상품 사진</Item>
          <Item>상품 이름</Item>
          <Item>수량</Item>
          <Item>사이즈</Item>
          <Item>가격</Item>
          <Item>삭제</Item>
        </Info>
        {productList.map(({ _id, name, price, size, count, image }) => (
          <ProductItem
            key={_id}
            name={name}
            id={_id}
            price={price}
            image={image}
            size={size}
            count={count}
            setProductList={setProductList}
            setCheckItems={setCheckItems}
            checkItems={checkItems}
          />
        ))}
        <TotalContainer>
          <TotalCount>총 {totalCount}개</TotalCount>
          <TotalPrice>{totalPrice} KRW</TotalPrice>
        </TotalContainer>
        <ButtonWrapper>
          <DeleteButton disabled={productList.length === 0} onClick={deleteAll}>
            전체 삭제
          </DeleteButton>
          <OrderButton disabled={checkItems.length === 0} onClick={handleOrder}>
            주문하기
          </OrderButton>
        </ButtonWrapper>
      </Container>
    </>
  );
}

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

const Container = styled.div`
  width: 1000px;
  min-height: 500px;
  border: 1px solid black;
  position: relative;
  background-color: #f2edf2;
  border-radius: 12px;
`;

const Checkbox = styled.input`
  zoom: 2;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: #8c8788;
  margin-bottom: 20px;
`;
const Item = styled.span`
  font-size: 28px;
  font-weight: 700;
`;

const TotalContainer = styled.div`
  width: 90%;
  display: flex;
  border-top: 4px solid;
  margin: 30px auto;
  font-size: 32px;
`;

const TotalCount = styled.span`
  margin-right: auto;
`;
const TotalPrice = styled.span`
  margin-left: auto;
`;

const ButtonWrapper = styled.div`
  margin: 20px auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const OrderButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 28px;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  background-color: #8c8788;
`;

const DeleteButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 28px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #8c8788;
`;
export default Cart;
