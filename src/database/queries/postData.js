/* eslint-disable linebreak-style */
const connection = require('../config/connection');

const postData = (recipeName, ingredients, directions) => {
  const sql = {
    text: 'INSERT INTO recipes (recipe_name , ingredients, directions) VALUES ($1, $2, $3) RETURNING *;',
    values: [recipeName, ingredients, directions],
  };
  return connection.query(sql);
};

module.exports = postData;
