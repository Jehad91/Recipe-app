/* eslint-disable linebreak-style */
const connection = require('../config/connection');

const getData = () => {
  const sql = {
    text: 'SELECT * FROM recipes;',
    values: [],
  };
  return connection.query(sql);
};

module.exports = getData;
