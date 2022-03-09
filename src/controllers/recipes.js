/* eslint-disable linebreak-style */
const getData = require('../database/queries/getData');
const postData = require('../database/queries/postData');

const getRecipes = (req, res) => {
  getData()
    .then((data) => res.json(data.rows))
    .catch((err) => console.log('err:', err));
};

const addRecipes = (req, res) => {
  const { recipeNameInput, ingreatentsInput, directionsInput } = req.body;
  postData(recipeNameInput, ingreatentsInput, directionsInput)
    .then(() => res.redirect('/'))
    .catch((err) => console.log('err:', err));
};

module.exports = {
  getRecipes,
  addRecipes,
};
