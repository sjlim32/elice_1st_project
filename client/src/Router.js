import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/Product/ProductList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// 관리자 , 일반 페이지 라우터 구분 코드 추가
