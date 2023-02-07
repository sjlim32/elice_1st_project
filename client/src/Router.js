import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyPage from './pages/MyPage/MyPage';
import OrderList from './pages/MyPage/OrderList/OrderList';

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/user/" element={<MyPage />} />
      </Routes> */}
      <Routes>
        <Route path="/user/:userid" element={<MyPage />} />
      </Routes>
      <Routes>
        <Route path="/order/:userid" element={<OrderList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
