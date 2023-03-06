import { NextFunction, Request, Response } from 'express';
import { LoginCredentials } from '../types';
import statusPack from '../Utils/httpStatuses';

const { BAD_REQUEST_STATUS: badReq } = statusPack;

const credentialsValidation = (req: Request, res: Response, next: NextFunction) => {
  const { body: { username, password } } = req;
  if (!username) return res.status(badReq).json({ message: '"username" is required' });
  if (!password) return res.status(badReq).json({ message: '"password" is required' });
  req.body.credentials = { username, password } as LoginCredentials;
  next();
};

export = credentialsValidation;