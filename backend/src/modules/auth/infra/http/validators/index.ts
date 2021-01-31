/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { body, param } from 'express-validator';

export const rules = {
  signin: () => [body(['login', 'password'], 'is required').exists()],
  signup: () => [
    body(
      ['login', 'password', 'name', 'email', 'phone'],
      'is required',
    ).exists(),
  ],
  verify: () => [param('login', 'is required').exists()],
};
