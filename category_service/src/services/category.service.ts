import { CreateCategoryDto } from '../dtos/category.dto';
import { HttpException } from '../exceptions/HttpException';
import { Category } from '@/interfaces/category.interface';
import categoryModel from '../models/category.model';
import { isEmpty } from '../utils/util';

class CategoryService {
  public categories = categoryModel;

  public async findAllCategories(): Promise<Category[]> {
    const categories: Category[] = await this.categories.find();
    return categories;
  }

  public async findCategoryById(categoryId: string): Promise<Category> {
    if (isEmpty(categoryId)) throw new HttpException(400, 'Category ID is empty');

    const findCategory: Category | null = await this.categories.findOne({ _id: categoryId });
    if (!findCategory) throw new HttpException(409, "Category doesn't exist");

    return findCategory;
  }

  public async createCategory(categoryData: CreateCategoryDto): Promise<Category> {
    if (isEmpty(categoryData)) throw new HttpException(400, 'Category data is empty');

    const findCategory: Category | null = await this.categories.findOne({ name: categoryData.name });
    if (findCategory) throw new HttpException(409, `Category '${categoryData.name}' already exists`);

    const createCategoryData: Category = await this.categories.create(categoryData);
    return createCategoryData;
  }

  public async updateCategory(categoryId: string, categoryData: CreateCategoryDto): Promise<Category> {
    if (isEmpty(categoryData)) throw new HttpException(400, 'Category data is empty');

    const findCategory: Category | null = await this.categories.findOne({ name: categoryData.name });
    if (findCategory && findCategory._id != categoryId)
      throw new HttpException(409, `Category '${categoryData.name}' already exists`);

    const updateCategoryById: Category | null = await this.categories.findByIdAndUpdate(categoryId, categoryData, {
      new: true,
    });
    if (!updateCategoryById) throw new HttpException(409, "Category doesn't exist");

    return updateCategoryById;
  }

  public async deleteCategory(categoryId: string): Promise<Category> {
    const deleteCategoryById: Category | null = await this.categories.findByIdAndDelete(categoryId);
    if (!deleteCategoryById) throw new HttpException(409, "Category doesn't exist");

    return deleteCategoryById;
  }
}

export default CategoryService;
