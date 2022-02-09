import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';



/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const register = async (req, res, next) => {
  try {
    const data = await UserService.register(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  }
  catch (error) {
    next(error);
  }
 };

/**
 * Controller for User login
 * @param {object} req - request object
 * @param {object} res - request object
 * @param {function} next 
 */
 export const login = async (req, res, next) => {
  try {
    const data = await UserService.login(req.body);
  
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'User Login Successfully'
      });
  } catch (error) {
    next(error);
  }
};