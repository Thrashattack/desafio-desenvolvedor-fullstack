import { ValidationRules } from '@common-types/Validations';
import { body, ValidationChain } from 'express-validator';
export const rules = {
  simulate: (): ValidationChain[] => [
    body(['months', 'initialAmount'], ValidationRules.REQUIRED).exists(),
    body(['months', 'initialAmount'], ValidationRules.MUST_BE_DECIMAL).isDecimal(),
  ],
};
