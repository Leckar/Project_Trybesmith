import express from 'express';
import ordersRouter from './routers/order.router';
import productsRouter from './routers/products.router';
import usersRouter from './routers/users.router';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/users', usersRouter);

export default app;
