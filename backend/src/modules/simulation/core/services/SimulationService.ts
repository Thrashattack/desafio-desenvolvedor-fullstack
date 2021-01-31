import SimulationRepository from '@modules/simulation/infra/postgres/repositories/SimulationRepository';
import IService from '@shared/core/IService';
import {
  SimulationAttributes,
  SimulationInstance,
} from '@shared/infra/postgres/models/Simulation';
import CdbProvider, { CdbRentability } from '../providers/CdbProvider';
import { CdiOverCdb } from '../providers/CdiProvider';
import SavingsProvider, {
  SavingsRentability,
} from '../providers/SavingProvider';

export default class CalculateCdbService
  implements
    IService<
      { userId: number; months: number; initialAmount: number },
      SimulationInstance
    > {
  SimulationRepository: SimulationRepository;

  constructor() {
    this.SimulationRepository = new SimulationRepository();
  }
  async execute({
    userId,
    months,
    initialAmount,
  }: {
    userId: number;
    months: number;
    initialAmount: number;
  }): Promise<SimulationInstance> {
    const simulationDate = new Date().toLocaleString();

    const cdbFinalAmount = new CdbProvider().provide({ months, initialAmount });
    const savingsFinalAmount = new SavingsProvider().provide({
      months,
      initialAmount,
    });

    const simulation: SimulationAttributes = {
      userId,
      months,
      initialAmount,
      simulationDate,
      cdbFinalAmount,
      savingsFinalAmount,
      savingsRentability: SavingsRentability,
      cdbRentability: CdbRentability,
      cdiOverCdb: CdiOverCdb,
    };

    return await this.SimulationRepository.save(
      simulation as SimulationInstance,
    );
  }
}
