import userModel from '../models/users.model';
import { NewUser } from '../types';
import tokenManager from '../Utils/jwtManager';

const { tokenGenerator } = tokenManager;

const create = async (user: NewUser) => {
  const { id, username } = await userModel.create(user);
  const token = tokenGenerator({ id, username });
  return token;
};

export = {
  create,
};