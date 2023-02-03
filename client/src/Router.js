import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage';
import Header from './pages/Layout/Header';
import Footer from './pages/Layout/Footer';

const Router = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
          <Route path="/user/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      <Footer>Footer</Footer>
    </>
  );
};

export default Router;

// 관리자 , 일반 페이지 라우터 구분 코드 추가
