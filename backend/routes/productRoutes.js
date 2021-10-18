const express = require('express');
const router = express.Router();

const {getAllProducts,getProductById}=require("../controller/productController")
const { isAuthenticatedUser} = require("../middleware/auth");

router.route('/Home').get(isAuthenticatedUser,getAllProducts)

router.route('/:id').get(isAuthenticatedUser,getProductById)

module.exports = router;