require('dotenv').config();
const { env } = process;
const {
  TIMEZONE = 'America/Mexico_City',
  COUNTRY,
  DB_CONNECTION,
  CONNECTION_POOL_SIZE,
} = env;

const CACHE_CONNECTION = require('./src/utils/Cache');

module.exports = {
  TIMEZONE,
  COUNTRY,
  DB_CONNECTION,
  CACHE_CONNECTION,
  databaseConfig: {
    client: 'pg',
    connection: DB_CONNECTION,
    pool: {
      min: 1,
      max: parseInt(CONNECTION_POOL_SIZE, 10) || 5,
    },
    acquireConnectionTimeout: 5000,
  },
};
