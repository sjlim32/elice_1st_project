import React from 'react';
import styled from 'styled-components';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

const LogoStyle = styled.div`
  margin: 40px 0 0 30px;
  float: left;
  font-size: 35px;
  font-weight: bold;
`;

const ShoppingIconStyle = styled(AddShoppingCartIcon)`
  margin: 45px 20px 0 75%;
  float: left;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
  }
`;

const PersonIconStyle = styled(PersonIcon)`
  margin: 45px 0 0 0;
  float: none;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
  }
`;

const GenderStyle = styled.div`
  padding: 10px;
  margin: 10px 0px 0 0px;
  display: inline-block;
  font-size: 20px;
  font-weight: 400;
`;

const HrStyle = styled.hr`
  background-color: rgba(153, 164, 151, 1);
  width: 92%;
  height: 10px;
  margin: 0px 0 0 50px;
  border: none;
  border-radius: 0px;
`;

function Logo() {
  return (
    <div>
      <LogoStyle>
        <a href="/">eli·gan·ce</a>
      </LogoStyle>
    </div>
  );
}

function Nav() {
  return (
    <div>
      <br />
      <ul>
        <GenderStyle>
          <li style={{ marginLeft: '50px' }}>
            <a href="/">여성</a>
          </li>
        </GenderStyle>
        <GenderStyle>
          <div style={{ fontSize: '30px', fontWeight: 'lighter' }}>|</div>
        </GenderStyle>
        <GenderStyle>
          <li>
            <a href="/">남성</a>
          </li>
        </GenderStyle>
      </ul>
      <HrStyle />
    </div>
  );
}

function Icon() {
  function moveHandler() {
    window.location.href = '/user/login';
  }

  return (
    <div>
      <ul>
        <li>
          <ShoppingIconStyle fontSize="large">
            <AddShoppingCartIcon />
          </ShoppingIconStyle>
        </li>
        <li>
          <PersonIconStyle fontSize="large" onClick={moveHandler}>
            <PersonIcon />
          </PersonIconStyle>
        </li>
      </ul>
    </div>
  );
}

function Header() {
  return (
    <div>
      <Logo />
      <Icon />
      <Nav />
    </div>
  );
}

export default Header;
