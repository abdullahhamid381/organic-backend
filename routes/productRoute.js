const express = require("express");
const {

  updateProduct,
  deleteProduct,

  createProduct,
  getProducts,
  
} = require("../controllers/productController");


const router = express.Router();

router.route("/products").get(getProducts);
router.route("/product/:id").delete(deleteProduct);

router.route("/product/new").post(createProduct);


router.route("/product/:id").put(updateProduct);

module.exports = router;
