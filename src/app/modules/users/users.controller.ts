import { RequestHandler } from 'express-serve-static-core';
import usersServices from './users.services';

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body;
    const result = await usersServices.createUser(user);
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UsersController = {
  createUser,
};
