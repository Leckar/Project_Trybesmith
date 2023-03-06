import express from 'express';
import productRouter from './routers/products.router';
import userRouter from './routers/users.router';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);

export default app;
