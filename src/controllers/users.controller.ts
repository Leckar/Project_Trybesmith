import { Request, Response } from 'express';
import usersService from '../services/users.service';
import statusPack from '../Utils/httpStatuses';

const { CREATED_STATUS } = statusPack;

const create = async (req: Request, res: Response) => { 
  console.log('Opa, passei 5');
  const { user } = req.body;
  const token = await usersService.create(user);
  console.log('Opa, passei 6');
  res.status(CREATED_STATUS).json({ token });
};

export = {
  create,
};