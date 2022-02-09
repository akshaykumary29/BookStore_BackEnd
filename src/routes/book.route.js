import express from 'express';
import * as bookController from '../controllers/book.controller';
// import * as validator from '../validators/'

const router = express.Router();

// route to add book
router.post('/addbook', bookController.newBook);

// route to get book
router.get('/getbook', bookController.getBooks);

export default router;