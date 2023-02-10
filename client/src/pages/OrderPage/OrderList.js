import React from 'react';
import styled from 'styled-components';

function OrderList({ ordereditem }) {
  return (
    <div>
      {ordereditem.map(i => (
        <div key={i}>
          <ItemWrap>
            <ItemImg
              alt={i.name}
              src={`http://kdt-ai6-team01.elicecoding.com/api/uploads/${i._id}.png`}
            />
          </ItemWrap>
          <OrderedItemText>
            <OrderedItemName>
              <OrderedItemInfo>상품명</OrderedItemInfo>
              <OrderedItemInfo>{i.name}</OrderedItemInfo>
            </OrderedItemName>
            <OrderedItemPrice>
              <OrderedItemInfo>상품 가격</OrderedItemInfo>
              <OrderedItemInfo>{i.price}</OrderedItemInfo>
            </OrderedItemPrice>
          </OrderedItemText>
        </div>
      ))}
    </div>
  );
}

const OrderedItemInfo = styled.p`
  font-size: 1.2em;
  display: inline;
  margin: 0 5vh 0 0;
`;

const OrderedItemText = styled.p`
  margin: 0vh 0 15vh 33vh;
  font-size: 1.2em;
`;
const OrderedItemName = styled.div`
  margin: 0 0 2vh 0;
`;

const OrderedItemPrice = styled.div`
  padding: 0vh 0 0vh 2vh;
`;

const ItemWrap = styled.div`
  margin: 0vh 0vh 0vh 0vh;
  float: left;
`;

const ItemImg = styled.img`
  width: 25vh;
  height: auto;
`;

export default OrderList;
