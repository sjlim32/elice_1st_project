import { Router } from 'express';
import Product from '../schemas/product.js';

const router = Router();

/** 상품 목록 */
router.get('/', async (req, res) => {
    const { gender, major_classification, minor_classification } = req.body;

    try {
        let product;
        if (!gender) {
            // find에 빈객체 전달
            product = await Product.find({});

        } else if (!major_classification) {
            // gender만 넘어오는 경우
            product = await Product.find({ gender });

        } else if (!minor_classification) {
            // gender와 major가 넘어오는 경우
            // 남성 여성 if문 작성 추가로 작성하면 된다.
            product = await Product.find({ gender, major_classification });

        } else {
            // minor까지 들어오는 경우
            product = await Product.find({ gender, major_classification, minor_classification });
        }
        res.json({ products: product });
    } catch (error) {
        res.json({ message: error.message });
    }
});

/** 상품 상세 */
router.get('/:product_id', async (req, res) => {
    const productId = req.params;
    // console.log(productId);
    try {
        const product = await Product.findOne({ _id: productId.product_id }); // 속성값 찾기 find로 찾음!
        res.json(product);
    } catch (error) {
        res.json({ error });
    };
});

export default router;