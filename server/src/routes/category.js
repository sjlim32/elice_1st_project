import { Router } from 'express';
import Category from '../schemas/category.js';
import Gender from '../schemas/gender.js';

const router = Router();

/** 카테고리(분류) 목록 전달 */
router.get('/classification', async (req, res) => {
  const category = await Category.find({});
  res.json({ category });
});

/** 카테고리(성별) 목록 전달 */
router.get('/gender', async (req, res) => {
  const { gender } = await Gender.findOne({});
  res.json({ gender });
});

export default router;
