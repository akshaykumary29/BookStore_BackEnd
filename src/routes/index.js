import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import bookRoute from './book.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome To Bookstore App');
  });
  router.use('/users', userRoute);
  router.use('/book', bookRoute);

  return router;
};

export default routes;
