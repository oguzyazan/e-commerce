import "dotenv/config";
import express from "express";
import { connectDB } from "./config/dbConn";
import mongoose from "mongoose";
import categoryRoute from "./routes/categoryRoute";
import brandRoute from "./routes/brandRoute";
import productRoute from "./routes/productRoute";

const app = express();
app.use(express.json());

app.use("/api/product", categoryRoute);
app.use("/api/product", brandRoute);
app.use("/api/product", productRoute);
connectDB();

const PORT = process.env.PORT || 3500;
mongoose.connection.once("open", () => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
