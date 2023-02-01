import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ProductList() {
  return (
    <Container>
      <MainNav>
        <span>
          <Link to={ProductList}>여성</Link>
        </span>
        <span>|</span>
        <span>
          <a>남성</a>
        </span>
      </MainNav>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 90px;
  width: 100%;
  padding: 40px;
`;

const MainNav = styled.div`
  width: 100%;
  border-bottom: 10px solid rgba(153, 164, 151, 1);
  padding-bottom: 20px;
  font-weight: 600;
  font-size: 30px; /* font-family: 'IBM Plex Sans KR', sans-serif; */
  > span {
    padding: 5px;
  }
`;
