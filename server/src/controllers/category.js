import Category from '../schemas/category.js';
import Gender from '../schemas/gender.js';

export const getClassification = async (req, res) => {
  const category = await Category.find({});
  res.json({ category });
};

export const getGender = async (req, res) => {
  const { gender } = await Gender.findOne({});
  res.json({ gender });
};

export const modifyCategory = async (req, res) => {
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
}