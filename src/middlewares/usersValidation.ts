import { NextFunction, Request, Response } from 'express';
import statusPack from '../Utils/httpStatuses';

const { BAD_REQUEST_STATUS: badReq, UNPROCESSABLE_ENTITY: unpEntity } = statusPack;

const newUsernameValidation = (username: string) => {
  if (!username) return { type: badReq, message: '"username" is required' };
  if (typeof username !== 'string') {
    return { type: unpEntity, message: '"username" must be a string' };
  }
  if (username.length < 3) {
    return { type: unpEntity, message: '"username" length must be at least 3 characters long' };
  }
  return { type: null, message: '' };
};

const newVocationValidation = (vocation: string) => {
  if (!vocation) return { type: badReq, message: '"vocation" is required' };
  if (typeof vocation !== 'string') {
    return { type: unpEntity, message: '"vocation" must be a string' };
  }
  if (vocation.length < 3) {
    return { type: unpEntity, message: '"vocation" length must be at least 3 characters long' };
  }
  return { type: null, message: '' };
};

const newLevelValidation = (level: number) => {
  if (!level && level !== 0) return { type: badReq, message: '"level" is required' };
  if (typeof level !== 'number') {
    return { type: unpEntity, message: '"level" must be a number' };
  }
  if (level < 1) {
    return { type: unpEntity, message: '"level" must be greater than or equal to 1' };
  }
  return { type: null, message: '' };
};

const newPasswordValidation = (password: string) => {
  if (!password) return { type: badReq, message: '"password" is required' };
  if (typeof password !== 'string') {
    return { type: unpEntity, message: '"password" must be a string' };
  }
  if (password.length < 8) {
    return { type: unpEntity, message: '"password" length must be at least 8 characters long' };
  }
  return { type: null, message: '' };
};

const newUserValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username, vocation, level, password } = req.body;
  const userCheck = newUsernameValidation(username);
  if (userCheck.type) return res.status(userCheck.type).json({ message: userCheck.message });
  const vocatCheck = newVocationValidation(vocation);
  if (vocatCheck.type) return res.status(vocatCheck.type).json({ message: vocatCheck.message });
  const levelCheck = newLevelValidation(level);
  if (levelCheck.type) return res.status(levelCheck.type).json({ message: levelCheck.message });
  const pwdCheck = newPasswordValidation(password);
  if (pwdCheck.type) return res.status(pwdCheck.type).json({ message: pwdCheck.message });
  req.body.user = { username, vocation, level, password };
  next();
};

export = newUserValidation;