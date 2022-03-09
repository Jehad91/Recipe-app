/* eslint-disable linebreak-style */
const connection = require('../config/connection');

const postData = (recipeName, ingredients, directions, chefsId) => {
  const sql = {
    text: 'INSERT INTO recipes (recipe_name , ingredients, directions, chefs_id) VALUES ($1, $2, $3, $4) RETURNING *;',
    values: [recipeName, ingredients, directions, chefsId],
  };
  return connection.query(sql);
};

module.exports = postData;
