import express from "express";
const router = express.Router();
import brandController from "../controllers/brandController";

router
  .route("/brand")
  .get(brandController.getList)
  .post(brandController.create)
  .put(brandController.update)
  .delete(brandController.delete);

export default router;
