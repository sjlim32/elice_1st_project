import { model, Schema } from 'mongoose';

const categorySchema = new Schema({
  major_classification: {
    type: String,
    required: true,
  },
  minor_classification: {
    type: [String],
    required: true,
  },
});

const categoryModel = model('Category', categorySchema);
export default categoryModel;
