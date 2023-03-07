import { Request, Response } from 'express';
import usersService from '../services/users.service';
import statusPack from '../Utils/httpStatuses';

const { CREATED_STATUS } = statusPack;

const create = async (req: Request, res: Response) => { 
  const { user } = req.body;
  const token = await usersService.create(user);
  res.status(CREATED_STATUS).json({ token });
};

export = {
  create,
};