const router = require("express").Router();
const productRouter = require("./products/index");

router.use("/products", productRouter);

module.exports = router;
