import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductList from './pages/ProductList/ProductList';
import MyPage from './pages/MyPage/MyPage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Header from './pages/Layout/Header';
import Footer from './pages/Layout/Footer';
const Router = () => {
  const ROUTES = {
    MAIN: '/',
    LOGIN: '/user/login',
    SIGNUP: '/user/signup',
    PRODUCTLIST: '/user/product',
    PRODUCTDETAIL: '/user/product/:productId',
    MYPAGE: '/user/:userid',
  };
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.MAIN} element={<LandingPage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.SIGNUP} element={<Signup />} />
          <Route path={ROUTES.PRODUCTLIST} element={<ProductList />} />
          <Route path={ROUTES.PRODUCTDETAIL} element={<ProductDetail />} />
          <Route path={ROUTES.MYPAGE} element={<MyPage />} />
        </Routes>
      </BrowserRouter>
      <Footer>Footer</Footer>
    </>
  );
};

export default Router;
