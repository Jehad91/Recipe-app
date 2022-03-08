/* eslint-disable linebreak-style */
const express = require('express');
const recipes = require('./recipes');
// require('env2')('config.env');

const router = express.Router();

router.get('/recipes', recipes.getRecipes);
router.post('/create-recipe', recipes.addRecipes);

module.exports = router;
