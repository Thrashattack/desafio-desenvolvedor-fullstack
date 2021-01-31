import SimulationRepository from '@modules/simulation/infra/postgres/repositories/SimulationRepository';
import IService from '@shared/core/IService';
import { SimulationInstance } from '@shared/infra/postgres/models/Simulation';

export default class GetSimulationService
  implements IService<number, SimulationInstance[]> {
  SimulationsRepository: SimulationRepository;

  constructor() {
    this.SimulationsRepository = new SimulationRepository();
  }
  async execute(userId: number): Promise<SimulationInstance[]> {
    return await this.SimulationsRepository.findByUser(userId);
  }
}
