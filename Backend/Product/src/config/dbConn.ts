export {};

import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      dbName: "Ecommerce_Product",
    });
  } catch (err) {
    console.log(err);
  }
}

export { connectDB };
