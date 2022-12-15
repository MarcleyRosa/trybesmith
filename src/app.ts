import express from 'express';
import { getAllProducts, postProduct, postUser } from './controllers/products.controller';

const app = express();

app.use(express.json());

app.get('/products', getAllProducts);

app.post('/products', postProduct);

app.post('/users', postUser);

export default app;
