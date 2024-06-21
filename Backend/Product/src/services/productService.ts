import UpdateCreateProductDto from "../dtos/product/updateCreateProductDto";
import productRepository from "../repositories/productRepository";

const getList = async () => {
  return await productRepository.getList();
};

const create = async (product: UpdateCreateProductDto) => {
  return await productRepository.create(product);
};

const update = async (productId: string, product: UpdateCreateProductDto) => {
  return await productRepository.update(productId, product);
};

const _delete = async (productId: string) => {
  return await productRepository.delete(productId);
};

export default { getList, create, update, delete: _delete };
