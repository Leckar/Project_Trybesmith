export type User = {
  id: number,
  name: string,
  vocation: string,
  level: number,
  password: string,
};

export type NewProduct = {
  name: string,
  amount: string,
};

export type Product = {
  id: number,
} & NewProduct;