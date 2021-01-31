import { RequestHandler, Router } from 'express';
import { rules } from '@modules/simulation/infra/http/validators';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthentication';
import validationsInterceptor from '@shared/infra/http/middlewares/validateRequest';
import SimulationController from '../controllers';

const controller = new SimulationController();
export default Router()
  .use(ensureAuthenticated)
  .post(
    '/simulation',
    rules.simulate,
    validationsInterceptor,
    (controller.post as unknown) as RequestHandler,
  )
  .get('/simulation', (controller.get as unknown) as RequestHandler);
