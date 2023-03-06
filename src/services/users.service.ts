import userModel from '../models/users.model';
import { NewUser } from '../types';
import tokenManager from '../Utils/jwtManager';

const { tokenGenerator } = tokenManager;

const create = async (user: NewUser) => {
  const newUser = await userModel.create(user);
  const token = tokenGenerator(newUser);
  return token;
};

export = {
  create,
};