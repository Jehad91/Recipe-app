/* eslint-disable linebreak-style */
const express = require('express');
const recipes = require('./recipes');
const deleteRecipe = require('./deleteData');
const errors = require('./errors');
// require('env2')('config.env');

const router = express.Router();

router.get('/recipes', recipes.getRecipes);
router.post('/create-recipe', recipes.addRecipes);
router.delete('/delete-recipe/:id', deleteRecipe);
router.use(errors.error404);
router.use(errors.error500);

module.exports = router;
