import asyncHandler from "express-async-handler";
import categoryService from "../services/categoryService";
import { Request, Response } from "express";

const getList = asyncHandler(async (req: Request, res: Response) => {
  const categories = await categoryService.getList();
  res.json(categories);
});

const create = asyncHandler(async (req: Request, res: Response) => {
  const newCategory = req.body;
  const createdCategory = await categoryService.create(newCategory);
  res
    .status(201)
    .json({ message: `New category ${createdCategory.Name} created` });
});

const update = asyncHandler(async (req: Request, res: Response) => {
  const categoryId = req.query.id.toString();
  const updatedCategory = await categoryService.update(categoryId, req.body);
  res.status(200).json({ message: `Category ${updatedCategory.Name} updated` });
});

const _delete = asyncHandler(async (req: Request, res: Response) => {
  const categoryId = req.query.id.toString();
  await categoryService.delete(categoryId);
  res.status(200).json({ message: `Category deleted` });
});

export default {
  getList,
  create,
  update,
  delete: _delete,
};
