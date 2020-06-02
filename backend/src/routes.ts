import { Router } from 'express';

import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const itemsController = new ItemsController();
const pointsController = new PointsController();

const routes = Router();

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);

export default routes;
