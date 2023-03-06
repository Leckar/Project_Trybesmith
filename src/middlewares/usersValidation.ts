import { NextFunction, Request, Response } from 'express';
import statusPack from '../Utils/httpStatuses';

const { BAD_REQUEST_STATUS: badReq } = statusPack;

const newUserValidation = (req: Request, res: Response, next: NextFunction) => {
  const { body: { username, vocation, level, password } } = req;
  if (!username) return res.status(badReq).json({ message: '"username" is required' });
  if (!vocation) return res.status(badReq).json({ message: '"vocation" is required' });
  if (!level) return res.status(badReq).json({ message: '"level" is required' });
  if (!password) return res.status(badReq).json({ message: '"password" is required' });
  req.body.user = { username, vocation, level, password };
  next();
};

export = {
  newUserValidation,
};