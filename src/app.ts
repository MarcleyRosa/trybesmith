import express from 'express';
import { getAllProducts, postProduct } from './controllers/products.controller';

const app = express();

app.use(express.json());

app.get('/products', getAllProducts);

app.post('/products', postProduct);

export default app;
