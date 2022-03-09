/* eslint-disable linebreak-style */
const deleteData = require('../database/queries/deleteData');

const deleteRecipe = (req, res) => {
  const recipeId = req.params.id;
  deleteData(recipeId)
    .then(() => res.redirect('/'));
};

module.exports = deleteRecipe;
