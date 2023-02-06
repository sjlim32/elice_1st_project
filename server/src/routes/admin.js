import { Router } from 'express';
import Product from '../schemas/product.js';
import Gender from '../schemas/gender.js';

const router = Router();

/** 상품 추가 */
router.post('/product', async (req, res) => {
  const { name, price, image, description, company, gender, major_classification, minor_classification } = req.body;
  // try-catch 사용
  try {
    const product = await Product.create({
      name,
      price,
      image,
      description,
      company,
      gender,
      major_classification,
      minor_classification,
    });
    res.json(product);
  } catch (error) {
    res.json({ error });
  }
});

/** 상품 삭제 */
router.delete('/product/:product_id', async (req, res) => {
  const productId = req.params;
  // console.log(productId);
  try {
    await Product.deleteOne({ _id: productId.product_id });
    res.json({ message: '삭제 완료되었습니다.' });
  } catch (error) {
    res.json({ message: '삭제 실패하였습니다.' });
  }
});

/** 카테고리 수정 */
router.patch('/product', async (req, res) => {
  const { gender, classification } = req.body;
  try {
    await Gender.findOneAndUpdate({}, { gender });

    const majors = Object.keys(classification);
    majors.forEach(async (major) => {
      await Category.findOneAndUpdate({ major_classification: major }, { minor_classification: classification[major] });
    });
    res.json({ message: '카테고리가 수정되었습니다.' });
  } catch (error) {
    res.json({ message: error.message });
  }
});

export default router;
