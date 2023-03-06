export type NewUser = {
  username: string,
  vocation: string,
  level: number,
  password: string,
};

export type User = {
  id: number,
} & NewUser;

export type Payload = Omit<User, 'password'>;

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