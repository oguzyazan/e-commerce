import UpdateCreateCategoryDto from "../dtos/category/updateCreateCategoryDto";
import categoryRepository from "../repositories/categoryRepository";

const getList = async () => {
  return await categoryRepository.getList();
};

const create = async (newcategory: UpdateCreateCategoryDto) => {
  return await categoryRepository.create(newcategory);
};

const update = async (
  categoryId: string,
  updatedcategory: UpdateCreateCategoryDto
) => {
  return await categoryRepository.update(categoryId, updatedcategory);
};

const _delete = async (categoryId: string) => {
  return await categoryRepository.delete(categoryId);
};

export default {
  getList,
  create,
  update,
  delete: _delete,
};
