import userModel from '../models/users.model';
import { LoginCredentials } from '../types';
import tokenManager from '../Authenticator/jwtManager';

const { tokenGenerator } = tokenManager;

const login = async (credentials: LoginCredentials): Promise<(string | undefined)> => {
  const request = await userModel.findByPK(credentials.username);
  if (!request) return undefined; 
  const { id, username, password } = request;
  if (credentials.password !== password) return undefined;
  const token = tokenGenerator({ id, username });
  return token;
};

export = login;