import { model, Schema } from 'mongoose';

const genderSchema = new Schema({
  gender: {
    type: [String],
    required: true,
  }
});

const genderModel = model('Gender', genderSchema);
export default genderModel;
