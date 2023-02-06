import { Router } from 'express';
import Category from '../schemas/category';
import Gender from '../schemas/gender';

const router = Router();

router.get('/', async (req, res) => {
  const category = await Category.find({});
  const { gender } = await Gender.findOne({});

  // 데이터를 프론트에서 필요한 형태로 구조 변환
  let res = category.reduce(
    (acc, { major_classification, minor_classification }) => {
      return { ...acc, [major_classification]: minor_classification };
    },
    { gender }
  );
  res.json(res);
});
