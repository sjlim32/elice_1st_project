import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import ProductDetail from './pages/ProductDetail/ProductDetail';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
