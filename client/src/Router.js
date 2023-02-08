import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductList from './pages/ProductList/ProductList';
import MyPage from './pages/MyPage/MyPage'
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Header from './pages/Layout/Header';
import Footer from './pages/Layout/Footer';
const Router = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user/login" element={<LoginPage />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/user/:userid" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
      <Footer>Footer</Footer>
    </>
  );
};

export default Router;
