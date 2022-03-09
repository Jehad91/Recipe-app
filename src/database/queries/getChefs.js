/* eslint-disable linebreak-style */
const connection = require('../config/connection');

const getChefs = () => {
  const sql = {
    text: 'SELECT * FROM chefs;',
    values: [],
  };
  return connection.query(sql);
};

module.exports = getChefs;
