import { Router } from 'express';
import CustomersController from '@controllers/Customers';
// import authMiddleware from '@middlewares/auth';
import errorsMiddleware from '@middlewares/errors';
import validate from '@middlewares/validator';
import { createCustomer, updateCustomer } from '@validators/customer';

const routes = Router();

routes.use('/status', (req, res) => res.status(200).json());

// routes.use(authMiddleware);

routes.get('/customers', CustomersController.index);
routes.get('/customers/:document', CustomersController.show);
routes.put(
  '/customers/:document',
  validate(updateCustomer, 'body'),
  CustomersController.update,
);
routes.post(
  '/customers',
  validate(createCustomer, 'body'),
  CustomersController.store,
);
routes.delete('/customers/:id', CustomersController.delete);

routes.use(errorsMiddleware);

export default routes;
