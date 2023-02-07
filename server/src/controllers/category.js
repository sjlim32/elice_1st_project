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
