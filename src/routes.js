import express from 'express';

import PlaceController from './controllers/PlaceControllers';
import Service_groupController from './controllers/Service_groupController';
import ServiceController from './controllers/ServiceController';
import PriceController from './controllers/PriceController';

const routes = express.Router();

routes.post('/places', PlaceController.store);
routes.get('/places', PlaceController.index);
routes.post('/places/auth', PlaceController.auth);
routes.post('/places/pay', PlaceController.payment);
routes.post('/places/payShow', PlaceController.paymentShow);


routes.post('/places/:places_id/service_group', Service_groupController.store);
routes.get('/places/:places_id/service_group', Service_groupController.index);

routes.post('/service_group/:service_groups_id/service', ServiceController.store);
routes.get('/service_group/:service_groups_id/service', ServiceController.index);

routes.post('/service/:services_id/price', PriceController.store);
routes.get('/service/:services_id/price', PriceController.index);

module.exports = routes;