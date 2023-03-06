import productsModel from '../models/products.model';
import { NewProduct, Product } from '../types';
import newProductValidation from './validations/newProduct.validation';

const create = async (product:NewProduct): Promise<(Product | undefined)> => {
  if (!newProductValidation(product)) return undefined;
  const result = await productsModel.create(product);
  return result as Product;
};

const findAll = async (): Promise<Product[]> => {
  const result = await productsModel.findAll();
  return result;
};

export = {
  create,
  findAll,
};