/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const creatRecipe = (name, ingredients, directions, chefName, chefCountry) => {
  const recipeDiv = createElement('div', '', 'class', 'recipe');
  const recipeNameDiv = createElement('div', '', 'class', 'recipe-name-container');
  const recipeName = createElement('h2', name.charAt(0).toUpperCase() + name.slice(1), 'class', 'recipe-name');
  const showSpanBtn = createElement('span', 'arrow_drop_down', 'class', 'material-icons show-btn');
  const removeButton = createElement('span', 'delete', 'class', 'material-icons delete');
  recipeNameDiv.append(removeButton, recipeName, showSpanBtn);
  const ingredientsP = createElement('p', `${ingredients}`, 'class', 'ingredients-content');
  const ingredientsTitle = createElement('strong', 'Ingredients: ', 'class', 'bold-title');
  ingredientsP.prepend(ingredientsTitle);
  const directionsP = createElement('pre', `${directions}`, 'class', 'directions-content');
  const directionTitle = createElement('strong', 'Directions: ', 'class', 'bold-title');
  directionsP.prepend(directionTitle);
  const chefNameh = createElement('h5', `Chef ${chefName}  `, 'class', 'chef-name');
  const chefCountryFlag = createElement('span', '', 'class', `flag-icon flag-icon-${chefCountry}`);
  chefNameh.append(chefCountryFlag);
  recipeDiv.append(recipeNameDiv, ingredientsP, directionsP, chefNameh);
  recipeContainer.prepend(recipeDiv);
};
