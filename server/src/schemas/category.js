import { model, Schema } from 'mongoose';

const categorySchema = new Schema({
  gender: {
    type: [String],
    required: true,
  },
  major_classification: {
    type: [String],
    required: true,
  },
  minor_classification: {
    type: [String],
    required: true,
  },
});

const categoryModel = model('Category', categorySchema);
export default categoryModel;
