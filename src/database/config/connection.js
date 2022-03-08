/* eslint-disable linebreak-style */
require('env2')('config.env');
const { Pool } = require('pg');

if (!process.env.DB_URL) {
  throw new Error('DB URL DOSE NOT EXIST');
}

const connection = new Pool({
  connectionString: process.env.DB_URL,
  ssl: false,
});

module.exports = connection;
