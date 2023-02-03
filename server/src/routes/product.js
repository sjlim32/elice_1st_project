import { Router } from 'express';
import Product from '../schemas/product.js';

const router = Router();

/** 상품 목록 */
router.get('/', async (req, res) => {
    const { gender, major_classification, minor_classification }= req.body;

    try {
        const product = await Product.find (
            // 분기처리하기 (금요일에 여쭤보기!)
            {
                gender,
                major_classification,
                minor_classification,
            }
        )
        res.json({ products: product});
    } catch(error){
        res.json({ error });
    }
}); 

/** 상품 상세 */
router.get('/:product_id', async(req, res)=>{
    const productId = req.params;
    try{
        const product = await Product.findOne({ _id: productId }); // 속성값 찾기 find로 찾음!
        res.json( product );
    } catch(error){
        res.json({ error });
    };
});

export default router;