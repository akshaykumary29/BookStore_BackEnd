import * as CartService from '../services/cart.service';

/**
 * Controller to create a new Book
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const addCart = async (req, res, next) => {
    try {
      const data = await CartService.addCart(req);
      res.status(data.status).json(data);
    } catch (error) {
      next(error);
    }
  };