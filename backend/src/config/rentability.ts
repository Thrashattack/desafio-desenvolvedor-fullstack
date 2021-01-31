import logger from '@shared/singletons/Logger';

export const selic = Number(process.env.SELIC_PERCENTAGE as string) / 100;

export const savings_over_selic =
  Number(process.env.SAVINGS_PERCENTAGE_OVER_SELIC as string) / 100;

export const cdi_over_selic =
  Number(process.env.CDI_PERCENTAGE_OVER_SELIC as string) / 100;

export const cdb_over_cdi =
  Number(process.env.CDB_PERCENTAGE_OVER_CDI as string) / 100;

export const savings_rentability_A_M = savings_over_selic / selic / 100 / 12;

export const cdi_rentability_A_M = cdi_over_selic / selic / 100 / 12;

export const cdb_rentability_A_M =
  ((cdi_over_selic / selic / 100) * cdb_over_cdi) / 12;

logger.info(`Savings rentability A.M: ${savings_rentability_A_M}`);
logger.info(`CDI rentability A.M: ${cdi_rentability_A_M}`);
logger.info(`CDB rentability A.M: ${cdb_rentability_A_M}`);
