import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import productService from "../services/productService";

const getList = asyncHandler(async (req: Request, res: Response) => {
  const products = await productService.getList();
  res.json(products);
});

const create = asyncHandler(async (req: Request, res: Response) => {
  const newProduct = req.body;
  const product = await productService.create(newProduct);
  res.status(201).json({ message: `New product ${product.Name} created` });
});

const update = asyncHandler(async (req: Request, res: Response) => {
  const productId = req.query.id.toString();
  const product = await productService.update(productId, req.body);
  res.status(200).json({ message: `Product ${product.Name} updated` });
});

const _delete = asyncHandler(async (req: Request, res: Response) => {
  const productId = req.query.id.toString();
  await productService.delete(productId);
  res.status(200).json({ message: `Product deleted` });
});

export default {
  getList,
  create,
  update,
  delete: _delete,
};
