export type NewUser = {
  username: string,
  vocation: string,
  level: number,
  password: string,
};

export type User = {
  id: number,
} & NewUser;

export type Payload = {
  id: number,
  username: string,
};

export type LoginCredentials = {
  username: string,
  password: string,
};

export type NewProduct = {
  name: string,
  amount: string,
};

export type Product = {
  id: number,
} & NewProduct;

export type Order = {
  id: number,
  userId: number,
  productsIds: number[],
};