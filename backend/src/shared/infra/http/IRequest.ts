import { Request } from 'express';
import { UserInstance } from '../postgres/models/User';

export default interface IRequest extends Request {
  user: UserInstance;
}
