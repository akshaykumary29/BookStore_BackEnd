import * as BookService from '../services/book.service';

/**
 * Controller to create a new Book
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const newBook = async (req, res, next) => {
    try {
        const data = await BookService.newBook(req.body);
        console.log(data);
        res.status(data.status).json(data);
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to get all Books available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const getBooks = async (req, res, next) => {
    try {
        const data = await BookService.getBooks(req.body);
        res.status(data.status).json(data);
    } catch (error) {
        next(error);
    }
};