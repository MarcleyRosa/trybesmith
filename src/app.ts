import express from 'express';
import { getAllOrders, getAllProducts, postProduct,
  postUser } from './controllers/products.controller';

const app = express();

app.use(express.json());

app.get('/products', getAllProducts);

app.post('/products', postProduct);

app.post('/users', postUser);

app.get('/orders', getAllOrders);

export default app;
