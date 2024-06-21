import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import brandService from "../services/brandService";

const getList = asyncHandler(async (req: Request, res: Response) => {
  const brands = await brandService.getList();
  res.json(brands);
});

const create = asyncHandler(async (req: Request, res: Response) => {
  const newBrand = req.body;
  const brand = await brandService.create(newBrand);
  res.status(201).json({ message: `New brand ${brand.Name} created` });
});

const update = asyncHandler(async (req: Request, res: Response) => {
  const brandId = req.query.id.toString();
  const brand = await brandService.update(brandId, req.body);
  res.status(200).json({ message: `Brand ${brand.Name} updated` });
});

const _delete = asyncHandler(async (req: Request, res: Response) => {
  const brandId = req.query.id.toString();
  await brandService.delete(brandId);
  res.status(200).json({ message: `Brand deleted` });
});

export default {
  getList,
  create,
  update,
  delete: _delete,
};
