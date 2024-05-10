import { expect, jest, beforeEach, it, describe } from '@jest/globals';
import ProductService from '../../src/services/product.service';
import productModel from '../../src/models/product.model';
import type { Product } from '../../src/interfaces/product.interface';
import { HttpException } from '../../src/exceptions/HttpException';

// Mock the entire productModel module
jest.mock('../../src/models/product.model', () => ({
  find: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  findByIdAndDelete: jest.fn(),
}));

const mockFind = productModel.find as jest.MockedFunction<typeof productModel.find>;
const mockFindOne = productModel.findOne as jest.MockedFunction<typeof productModel.findOne>;
const mockCreate = productModel.create as jest.MockedFunction<typeof productModel.create>;
const mockFindByIdAndUpdate = productModel.findByIdAndUpdate as jest.MockedFunction<
  typeof productModel.findByIdAndUpdate
>;
const mockFindByIdAndDelete = productModel.findByIdAndDelete as jest.MockedFunction<
  typeof productModel.findByIdAndDelete
>;

describe('ProductService', () => {
  let productService: ProductService;
  let mockProduct: Product;

  beforeEach(() => {
    productService = new ProductService();
    mockProduct = {
      _id: '1',
      categoryId: ['category1'],
      subCategoryId: ['subCategory1'],
      name: 'Test Product',
      description: 'Test Description',
      price: '100',
      image: 'test-image.jpg',
    };
  });

  describe('findAllProduct', () => {
    it('should return all products', async () => {
      mockFind.mockResolvedValue([mockProduct]);
      const products = await productService.findAllProduct();
      expect(products).toEqual([mockProduct]);
      expect(productModel.find).toHaveBeenCalled();
    });
  });

  describe('findProductById', () => {
    it('should throw an error if productId is empty', async () => {
      await expect(productService.findProductById('')).rejects.toThrow(HttpException);
    });

    it('should return the product when found', async () => {
      mockFindOne.mockResolvedValue(mockProduct);
      const product = await productService.findProductById('1');
      expect(product).toEqual(mockProduct);
      expect(productModel.findOne).toHaveBeenCalledWith({ _id: '1' });
    });
  });

  describe('createProduct', () => {
    it('should create and return the product', async () => {
      const productData = { ...mockProduct };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      mockCreate.mockResolvedValue(productData);

      const createdProduct = await productService.createProduct(productData);

      expect(createdProduct).toEqual(productData);
      expect(productModel.create).toHaveBeenCalledWith(productData);
    });

    it('should throw an error if the product data is empty', async () => {
      await expect(productService.createProduct({} as any)).rejects.toThrow(HttpException);
    });
  });

  describe('updateProduct', () => {
    const productId = '1';
    const updateData = {
      name: 'Updated Product Name',
      price: '200',
      description: 'Updated Description',
      categoryId: ['category2'],
      subCategoryId: ['subCategory2'],
      image: 'updated-image.jpg',
    };

    it('should update and return the product', async () => {
      mockFindByIdAndUpdate.mockResolvedValue({ _id: productId, ...updateData });
      const updatedProduct = await productService.updateProduct(productId, updateData);
      expect(updatedProduct).toEqual({ _id: productId, ...updateData });
      expect(productModel.findByIdAndUpdate).toHaveBeenCalledWith(productId, updateData);
    });

    it('should throw an error if the product data is empty', async () => {
      await expect(productService.updateProduct(productId, {} as any)).rejects.toThrow(HttpException);
    });

    it('should throw an error if the product does not exist', async () => {
      mockFindByIdAndUpdate.mockResolvedValue(null);
      await expect(productService.updateProduct(productId, updateData)).rejects.toThrow(HttpException);
    });
  });

  describe('deleteProduct', () => {
    const productId = '1';

    it('should delete and return the deleted product', async () => {
      mockFindByIdAndDelete.mockResolvedValue({ ...mockProduct, _id: productId });
      const deletedProduct = await productService.deleteProduct(productId);
      expect(deletedProduct).toEqual({ ...mockProduct, _id: productId });
      expect(productModel.findByIdAndDelete).toHaveBeenCalledWith(productId);
    });

    it('should throw an error if the product does not exist', async () => {
      mockFindByIdAndDelete.mockResolvedValue(null);
      await expect(productService.deleteProduct(productId)).rejects.toThrow(HttpException);
    });
  });
});
