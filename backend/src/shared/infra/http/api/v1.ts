import { Router } from 'express';
import AuthRoutes from '@modules/auth/infra/http/routes';
import SimulationRoutes from '@modules/simulation/infra/http/routes';
const v1Router = Router();

v1Router.use(AuthRoutes, SimulationRoutes);

export default v1Router;
