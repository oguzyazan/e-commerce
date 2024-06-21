import express from "express";
const router = express.Router();
import categoryController from "../controllers/categoryController";

router
  .route("/category")
  .get(categoryController.getList)
  .post(categoryController.create)
  .put(categoryController.update)
  .delete(categoryController.delete);

export default router;
