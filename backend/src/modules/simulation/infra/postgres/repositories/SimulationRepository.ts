import { SimulationInstance } from '@shared/infra/postgres/models/Simulation';
import Repository from '@shared/infra/postgres/Repository';
import { ModelCtor, Transaction } from 'sequelize';

export default class SimulationRepository extends Repository {
  private SimulationRepository: ModelCtor<SimulationInstance>;
  constructor() {
    super();
    this.SimulationRepository = this.db.Simulation;
  }

  async findById(id: number): Promise<SimulationInstance> {
    const transaction = new Transaction(this.db.sequelize, {
      autocommit: true,
    });
    const simulation = await this.SimulationRepository.findOne({
      where: { id },
      transaction,
    });
    if (!simulation) {
      await transaction.rollback();
      return Promise.reject(simulation);
    }
    return Promise.resolve(simulation);
  }

  async findByUser(userId: number): Promise<SimulationInstance[]> {
    const transaction = new Transaction(this.db.sequelize, {
      autocommit: true,
    });
    const simulation = await this.SimulationRepository.findAll({
      where: { userId },
      transaction,
    });
    if (!simulation) {
      await transaction.rollback();
      return Promise.reject(simulation);
    }

    return Promise.resolve(simulation);
  }

  async save(user: SimulationInstance): Promise<SimulationInstance> {
    const transaction = new Transaction(this.db.sequelize, {
      autocommit: true,
    });
    const createUser = await this.SimulationRepository.create(user, {
      transaction,
    });
    if (!createUser) {
      await transaction.rollback();
      return Promise.reject(createUser);
    }
    return Promise.resolve(createUser);
  }
}
