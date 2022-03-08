/* eslint-disable linebreak-style */
const getData = require('../database/queries/getData');
const postData = require('../database/queries/postData');

exports.getRecipes = (req, res) => {
  getData()
    .then((data) => res.json(data.rows))
    .catch((err) => console.log('err:', err));
};

exports.addRecipes = (req, res) => {
  const { recipeNameInput, ingreatentsInput, directionsInput } = req.body;
  console.log(recipeNameInput, ingreatentsInput, directionsInput);
  postData(recipeNameInput, ingreatentsInput, directionsInput)
    .then(() => res.redirect('/'))
    .catch((err) => console.log('err:', err));
};
