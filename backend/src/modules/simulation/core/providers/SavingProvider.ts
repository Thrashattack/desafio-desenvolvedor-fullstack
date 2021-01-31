import IProvider from '@shared/core/IProvider';
import { savings_rentability_A_M } from '@config/rentability';
export default class CdbProvider
  implements IProvider<{ months: number; initialAmount: number }, number> {
  provide(payload: { months: number; initialAmount: number }): number {
    let finalAmount = payload.initialAmount;
    for (let i = 0; i < payload.months; i++) {
      finalAmount += finalAmount * savings_rentability_A_M;
    }
    return finalAmount;
  }
}

export const SavingsRentability = savings_rentability_A_M;
