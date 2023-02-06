import { Router } from 'express';
import Category from '../schemas/category.js';
import Gender from '../schemas/gender.js';

const router = Router();

/** 카테고리 목록 전달 */
router.get('/', async (req, res) => {
  const category = await Category.find({});
  const { gender } = await Gender.findOne({});

  // 데이터를 프론트에서 필요한 형태로 구조 변환
  let result = category.reduce(
    (acc, { major_classification, minor_classification }) => {
      return { ...acc, [major_classification]: minor_classification };
    },
    { gender }
  );
  res.json(result);
});

export default Router;