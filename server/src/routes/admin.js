import { Router } from 'express';
import Product from '../schemas/product.js';

const router = Router();

/** 상품 추가 */
router.post('/product', async(req,res)=>{
    const { name, price, image, description, company, gender, major_classification, minor_classification } = req.body;
    // try-catch 사용하기! 쓰면 좋다! 
    try {
    const product = await Product.create({
        name,
        price,
        image,
        description,
        company,
        gender,
        major_classification,
        minor_classification
    }); 
        res.json(product);
    } catch(error){
        res.json({ error });
    };
});

/** 상품 삭제 */
router.delete('/product/:product_id', async(req, res)=>{
    try {
        await Product.findByIdAndDelete(req.params.product_id);

        // 객체로 만들기
        res.json({ message: '삭제 완료되었습니다.' });
    } catch(error){
        res.json({ message: '삭제 실패하였습니다.'});
    }
});

export default router;