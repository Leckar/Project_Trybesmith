import productsModel from '../models/products.model';
import { NewProduct, Product } from '../types';

const create = async (product:NewProduct): Promise<Product> => {
  const newProduct = await productsModel.create(product);
  return newProduct as Product;
};

const findAll = async (): Promise<Product[]> => {
  const request = await productsModel.findAll();
  return request;
};

export = {
  create,
  findAll,
};