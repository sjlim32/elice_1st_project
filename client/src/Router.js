import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// 관리자 , 일반 페이지 라우터 구분 코드 추가
