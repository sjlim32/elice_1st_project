import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function MyPage() {
  const [customerInfo, setCustomerInfo] = useState('');

  useEffect(() => {
    axios.get('/data/customerInfo.json').then(res => setCustomerInfo(res.data));
  }, []);

  return (
    <Container>
      <WelcomeMsg>
        <AccountIcon />
      </WelcomeMsg>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  margin-top: 90px;
  padding: 40px;
`;

const WelcomeMsg = styled.div`
  width: 100vw;
  margin-top: 90px;
  padding: 40px;
`;

const AccountIcon = styled(AccountCircleIcon)`
  color: rgba(153, 164, 151, 1);
  font-size: 50px;
  width: 50px;
  height: 50px;
`;
