const express = require('express');
const router = express.Router();
const UserController=require('../controllers/UserController')
const OrderController=require('../controllers/OrderController')
const ProductController=require('../controllers/ProductController')


router.post("/product",ProductController.createProduct)




router.post("/User",UserController.createUser)
router.get("/getUser",UserController.getUser)



router.post("/orders",OrderController.createOrder)
router.get("/getOrder",OrderController.getOrder)



module.exports = router


