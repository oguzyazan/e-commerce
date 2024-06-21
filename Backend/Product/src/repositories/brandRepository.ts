import UpdateCreateBrandDto from "../dtos/brand/updateCreateBrandDto";
import Brand from "../schemas/brand";

const getList = async () => {
  return await Brand.find();
};

const create = async (brand: UpdateCreateBrandDto) => {
  return await Brand.create(brand);
};

const update = async (brandId: string, brand: UpdateCreateBrandDto) => {
  return await Brand.findByIdAndUpdate(brandId, brand);
};

const _delete = async (brandId: string) => {
  return await Brand.findByIdAndDelete(brandId);
};

export default {
  getList,
  create,
  update,
  delete: _delete,
};
