import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyPage from './pages/MyPage/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:userid" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
