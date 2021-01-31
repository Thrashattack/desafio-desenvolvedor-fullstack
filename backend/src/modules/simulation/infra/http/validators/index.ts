import { body, ValidationChain } from 'express-validator';
export const rules = {
  simulate: (): ValidationChain[] => [
    body(['months', 'initialAmount'], 'required').exists(),
  ],
};
