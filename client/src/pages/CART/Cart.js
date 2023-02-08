import React from 'react';
import styled from 'styled-components';

function ProductItem({
  id,
  name,
  price,
  image,
  size,
  count,
  setProductList,
  setCheckItems,
  checkItems,
}) {
  const handleDelete = () => {
    setProductList(prev => prev.filter(product => product._id !== id));
  };

  const handleCount = e => {
    setProductList(prev =>
      prev.map(product => {
        if (product._id === id) {
          return { ...product, count: Number(e.target.value) };
        } else {
          return product;
        }
      })
    );
  };

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter(el => el !== id));
    }
  };

  return (
    <Container>
      <Check
        type="checkbox"
        checked={checkItems.includes(id)}
        onChange={e => {
          handleSingleCheck(e.target.checked, id);
        }}
      />
      <ProductImage src={image} alt={name} />
      <Name>{name}</Name>
      <Count type="number" value={count} onChange={handleCount} min={0} />
      <Size>{size}</Size>
      <Price>{price}</Price>
      <Delete onClick={handleDelete}>삭제</Delete>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;
const Check = styled.input`
  zoom: 2;
`;
const ProductImage = styled.img`
  width: 122px;
  height: 122px;
  border: 1px solid;
`;
const Count = styled.input`
  width: 42px;
  font-size: 20px;
  zoom: 1.2;
`;
const Name = styled.div`
  width: 122px;
`;
const Size = styled.div`
  width: 84px;
`;
const Price = styled.div`
  width: 56px;
`;
const Delete = styled.button`
  width: 56px;
  font-size: 20px;
  cursor: pointer;
  background-color: #8c8788;
  border-radius: 8px;
`;
export default ProductItem;
