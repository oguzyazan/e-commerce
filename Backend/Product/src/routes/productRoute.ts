import express from "express";
const router = express.Router();
import productController from "../controllers/productController";

router
  .route("/")
  .get(productController.getList)
  .post(productController.create)
  .put(productController.update)
  .delete(productController.delete);

export default router;
