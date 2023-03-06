import { NewProduct } from '../../types';

const newProductValidation = (product: NewProduct): boolean => {
  if (!product.name || product.name.length < 1) return false;
  if (!product.amount || product.amount.length < 1) return false;
  return true;
};

export = newProductValidation;