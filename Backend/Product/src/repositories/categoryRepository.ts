import UpdateCreateCategoryDto from "../dtos/category/updateCreateCategoryDto";
import Category from "../schemas/category";

const getList = async () => {
  return await Category.find();
};

const create = async (category: UpdateCreateCategoryDto) => {
  return await Category.create(category);
};

const update = async (
  categoryId: string,
  category: UpdateCreateCategoryDto
) => {
  return await Category.findByIdAndUpdate(categoryId, category);
};

const _delete = async (categoryId: string) => {
  return await Category.findByIdAndDelete(categoryId);
};

export default {
  getList,
  create,
  update,
  delete: _delete,
};
