import { Request, Response } from 'express';
import loginService from '../services/login.service';
import statusPack from '../Utils/httpStatuses';

const { OK_STATUS, UNAUTHORIZED_STATUS: noAuth } = statusPack;

const signIn = async (req: Request, res: Response) => {
  const { credentials } = req.body;
  const token = await loginService(credentials);
  if (!token) {
    return res.status(noAuth).json({ message: 'Username or password invalid' });
  }
  res.status(OK_STATUS).json({ token });
};

export = signIn;