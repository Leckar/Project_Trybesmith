import { NextFunction, Request, Response } from 'express';
import tokenManager from '../Utils/jwtManager';
import statusPack from '../Utils/httpStatuses';

const { UNAUTHORIZED_STATUS: unAuth } = statusPack;

const { tokenValidator } = tokenManager;

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(unAuth).json({ message: 'Token not found' });
  try {
    const payload = tokenValidator(authorization);
    const { id } = payload;
    req.body.userId = id;
  } catch (error) {
    return res.status(unAuth).json({ message: 'Invalid token' });
  }
  next();
};

export = tokenValidation;
