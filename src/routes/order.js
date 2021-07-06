import express from "express";

const router = express.Router();


import {
    getListOder,
    deleteOder,
    getOderDetails,
    updateOder,
    createOrder,
    addProductToOrder,
    removeProductToOrder
} from "../controllers/orderController";
import {checkToken} from "../middleware/auth";

router.put('/orders/:id', checkToken, updateOder);
router.post('/orders-add-products', checkToken, addProductToOrder);
router.post('/orders-remove-products', checkToken, removeProductToOrder);
router.get('/orders/:id', checkToken, getOderDetails);
router.delete('/orders/:id', checkToken, deleteOder);
router.post('/orders', checkToken, createOrder);
router.get('/orders', checkToken, getListOder);
module.exports = router;
