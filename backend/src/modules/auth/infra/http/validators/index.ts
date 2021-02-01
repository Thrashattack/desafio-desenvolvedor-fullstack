/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ValidationRules } from '@common-types/Validations';
import { body, param } from 'express-validator';

export const rules = {
  signin: () => [body(['login', 'password'], ValidationRules.REQUIRED).exists()],
  signup: () => [
    body(
      ['login', 'password', 'name', 'email', 'phone'],
      ValidationRules.REQUIRED,
    ).exists(),
  ],
  verify: () => [param('login', ValidationRules.REQUIRED).exists()],
};
