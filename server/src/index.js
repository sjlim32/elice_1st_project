import express from 'express'
import connect from './schemas/index.js';
import userRouter from './routes/user.js';

const app = express();

//connect();

app.use('/', (req, res) => {
  res.send('ok');
});

app.use('/user', userRouter)

app.listen(5000, () => {
  console.log('server is running');
});
