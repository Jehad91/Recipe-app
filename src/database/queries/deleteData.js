/* eslint-disable linebreak-style */
const connection = require('../config/connection');

const deleteData = (id) => {
  const sql = {
    text: 'DELETE FROM recipes WHERE id = $1;',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = deleteData;
