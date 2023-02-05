import { model, Schema } from 'mongoose';

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  product: {
    type: [Schema.Types.ObjectId],
    ref: 'Product',
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
});

const Order = model('Order', orderSchema);
export default Order;
