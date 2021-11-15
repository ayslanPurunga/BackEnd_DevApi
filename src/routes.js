import { Router } from "express";
import AuthController from "./app/controllers/AuthController";
import UserController from "./app/controllers/UserController";
import ConnectorController from './app/controllers/ConnectorController';
import check from './middlewares/check';

const routes = new Router();

routes.post('/auth', AuthController.store);
routes.post('/users', UserController.create);

routes.use(check);

routes.get('/users', UserController.show);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);

routes.get('/connectors', ConnectorController.index)
routes.get('/connectors/:id', ConnectorController.show)
routes.post('/connectors', ConnectorController.create)
routes.put('/connectors/:id', ConnectorController.update)
routes.delete('/connectors/:id', ConnectorController.delete)

module.exports = routes;