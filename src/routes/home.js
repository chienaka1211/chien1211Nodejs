const express = require('express');
const router = express.Router();
import {getHome,createUser,deleteUser,updateUser} from '../controllers/homeController'

router.patch('/home/update', updateUser);
router.put('/home/create', createUser);
router.delete('/home/delete',deleteUser);
router.get('/home', getHome);

module.exports = router;