import UpdateCreateProductDto from "../dtos/product/updateCreateProductDto";
import Product from "../schemas/product";

const getList = async () => {
  return await Product.find();
};

const create = async (product: UpdateCreateProductDto) => {
  return await Product.create(product);
};

const update = async (productId: string, product: UpdateCreateProductDto) => {
  return await Product.findByIdAndUpdate(productId, product);
};

const _delete = async (productId: string) => {
  return await Product.findByIdAndDelete(productId);
};

export default {
  getList,
  create,
  update,
  delete: _delete,
};
