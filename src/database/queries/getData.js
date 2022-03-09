/* eslint-disable linebreak-style */
const connection = require('../config/connection');

const getData = () => {
  const sql = {
    text: 'SELECT recipes.id, recipes.recipe_name, recipes.ingredients, recipes.directions, chefs.chef_name, chefs.chef_country FROM recipes JOIN chefs on recipes.chefs_id = chefs.id;',
    values: [],
  };
  return connection.query(sql);
};

module.exports = getData;
