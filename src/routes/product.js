import express from "express";
import {checkToken} from '../middleware/auth'

const router = express.Router();

import {getProduct, createProduct, deleteProduct, updateProduct, productDetails} from '../controllers/productController'

router.put('/products/:id',checkToken, updateProduct);
router.get('/products/:id', checkToken,productDetails);
router.post('/products', checkToken,createProduct);
router.delete('/products/:id',checkToken, deleteProduct);
router.get('/products', checkToken, getProduct);
module.exports = router;
