import 'express-async-errors';
import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';

import cors from 'cors';

import v1Routes from '@shared/infra/http/api/v1';

import '@config/rentability';

import Connection from '@shared/infra/postgres/Connection';
import logger from '@shared/singletons/Logger';

const app = express();

app.use(
  '/api/v1',
  express.json({
    limit: '100MB',
  }),
  cors({
    exposedHeaders: ['X-USE-CACHE'],
  }),
  v1Routes,
);

Connection.testConnection(5)
  .then(() => {
    app.set('connectionPool', Connection.createPool());

    app.set('doRollback', Connection.rollback);

    logger.info('Database connection is ready.');
  })
  .catch(e => {
    logger.error(e);
  });

export default app;
