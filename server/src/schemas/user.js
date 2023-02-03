import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      required: true,
    },
    phone: String,
    order: {
      type: [Schema.Types.ObjectId],
      ref: 'Order',
      default: [],
    },
    account: String,
    address: String,
  },
  { timestamps: true }
);

const User = model('User', userSchema);
export default User;
