import express from 'express';
import connect from './schemas/index.js';
import userRouter from './routes/user.js';

const app = express();
app.use(express.json());

connect();

app.use('/user', userRouter);

app.listen(5000, () => {
  console.log('server is running');
});
