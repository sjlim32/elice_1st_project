import express from 'express';
import cors from 'cors';

import connect from './schemas/index.js';
import userRouter from './routes/user.js';
import adminRouter from './routes/admin.js';
import productRouter from './routes/product.js';
import categoryRouter from './routes/category.js';
import orderRouter from './routes/order.js';
import admin from './middlewares/admin.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cross-origin
const corsConfig = {
  origin: 'http://localhost:3000/',
  credential: true,
};
app.use(cors());

app.use('/api/uploads', express.static('uploads'));

//DB connet
connect();

//router
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/admin', admin, adminRouter);
app.use('/api/category', categoryRouter);
app.use('/api/order', orderRouter);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
