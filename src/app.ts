import express from 'express';
// import { getAllOrders, getAllProducts, postProduct,
//   postUser } from './controllers/products.controller';
import productsRouter from './routes/products.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

// app.post('/products', postProduct);

// app.post('/users', postUser);

// app.get('/orders', getAllOrders);

export default app;
