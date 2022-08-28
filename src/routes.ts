import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { FranchiseController } from "./controllers/FranchiseController";

const routes = Router();

//USER ROUTES
routes.post('/createUser', new UserController().create);
routes.get('/login', new UserController().find);

//FRANCHISE ROUTES
routes.post('/createFranchise', new FranchiseController().create);

export default routes;