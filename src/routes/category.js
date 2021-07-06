import express from "express";
import categoryController from '../controllers/categoryController'
import {checkToken} from "../middleware/auth";

const router = express.Router();


router.delete('/categories/:id',checkToken, categoryController.deleteCategory);
router.put('/categories/:id',checkToken, categoryController.updateCategory);
router.get('/categories/:id',checkToken, categoryController.getDetailCategory);
router.get('/categories',checkToken, categoryController.getListCategories);
router.post('/categories',checkToken, categoryController.createCategory);

module.exports = router;