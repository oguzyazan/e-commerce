import UpdateCreateBrandDto from "../dtos/brand/updateCreateBrandDto";
import brandRepository from "../repositories/brandRepository";

const getList = async () => {
  return await brandRepository.getList();
};

const create = async (brand: UpdateCreateBrandDto) => {
  return await brandRepository.create(brand);
};

const update = async (brandId: string, brand: UpdateCreateBrandDto) => {
  return await brandRepository.update(brandId, brand);
};

const _delete = async (brandId: string) => {
  return await brandRepository.delete(brandId);
};

export default {
  getList,
  create,
  update,
  delete: _delete,
};
