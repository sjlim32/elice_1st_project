import { Router } from 'express';
import Order from '../schemas/order.js';
import User from '../schemas/user.js';

const router = Router();

// TODO 주문 추가
// * 사용자는 장바구니에 속한 상품들로 주문을 추가(진행)할 수 있다.
// request의 body 에 data를 받아온다.
// data는 주문자, 주문내역, 주소, 주문금액, 요청사항을 담고 있다.
// data를 db에 저장한다.
// 생성된 order._id 를 user_id의 order 값에 넣는다.
router.post('/', async (req, res) => {
    const { user_id, products, address, total_price, order_request } = req.body;
    const newOrder = { 
        user:user_id, 
        products, 
        address, 
        total_price,
        order_request
    };

    try {
        const order = await Order.create(newOrder);
        const user = await User.findOne({ _id: user_id });
        await User.findOneAndUpdate({ _id: user_id }, { order: [...user.order, order._id] });
        res.status(200).json({ message: '주문이 완료되었습니다.'});
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: '주문에 실패했습니다.'});
    };
})

// TODO 주문 조회
// * 사용자는 개인 페이지에서 자신의 주문 내역을 조회할 수 있다.
// parameter 로 user_id 를 받아온다.
// user_id 의 order를 받아온다.
// 받아온 주문목록을 json 으로 전달한다.
router.get('/:user_id', async (req, res) => {
    const userId = req.params.user_id;
    const { user } = await User.findOne({ _id: userId })

    try {
        // ! populate로 refactoring
        const orderList = await user.map(id => {
            Order.findById(id)
        })
        res.status(200).json( orderList );
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: '주문목록을 받아오지 못했습니다.'});
    }

})

// TODO 주문 수정
router.get('/:order_id', (req, res) => {
    const orderId = req.params.order_id

})

// TODO 주문 취소
router.delete('/:order_id', (req, res) => {
    const orderId = req.params.order_id
    }
)

export default router;