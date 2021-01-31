/* eslint-disable @typescript-eslint/no-unused-vars */
import SimulationService from '@modules/simulation/core/services/SimulationService';
import IController from '@shared/infra/http/IController';
import { Response } from 'express';
import IRequest from '@shared/infra/http/IRequest';
import GetSimulationService from '@modules/simulation/core/services/GetSimulationService';

export default class SimulationController
  implements IController<IRequest, Response> {
  post = async (req: IRequest, res: Response): Promise<Response> => {
    try {
      if (!req.user.id) {
        res.status(401).json({ error: 'Not logged in' });
      }
      const cdbResult = await new SimulationService().execute({
        userId: req.user.id,
        ...req.body,
      });
      return res.json(cdbResult);
    } catch (error) {
      return res.json({ error: (error as Error).message });
    }
  };
  put(req: IRequest, res: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  get = async (req: IRequest, res: Response): Promise<Response> => {
    try {
      if (!req.user.id) {
        res.status(401).json({ error: 'Not logged in' });
      }
      const simulations = await new GetSimulationService().execute(
        req.user.id as number,
      );
      return res.json(simulations);
    } catch (error) {
      return res.json({ error: (error as Error).message });
    }
  };
  patch(req: IRequest, res: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  delete(req: IRequest, res: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
}
