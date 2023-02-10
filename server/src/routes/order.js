import { Router } from 'express';
import { createOrder, getOrderDetails, modifyOrderDetails, deleteOrder } from '../controllers/order.js';
import auth from '../middlewares/auth.js';

const router = Router();

// * 주문 추가
router.post('/', auth, createOrder);

// * 주문 조회
router.get('/:user_id', auth, getOrderDetails);

// * 주문 수정
router.patch('/:order_id', auth, modifyOrderDetails);

// * 주문 취소
router.delete('/:order_id', auth, deleteOrder);

export default router;
