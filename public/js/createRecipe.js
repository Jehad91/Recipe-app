/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const creatRecipe = (name, ingredients, directions) => {
  const recipeDiv = createElement('div', '', 'class', 'recipe');
  const recipeName = createElement('h2', name, 'class', 'recipe-name');
  const showSpanBtn = createElement('span', 'arrow_drop_down', 'class', 'material-icons show-btn');
  recipeName.appendChild(showSpanBtn);
  const ingredientsP = createElement('p', `${ingredients}`, 'class', 'ingredients-content');
  const ingredientsTitle = createElement('strong', 'Ingredients: ', 'class', 'bold-title');
  ingredientsP.prepend(ingredientsTitle);
  const directionsP = createElement('pre', `${directions}`, 'class', 'directions-content');
  const directionTitle = createElement('strong', 'Directions: ', 'class', 'bold-title');
  directionsP.prepend(directionTitle);
  const editButton = createElement('span', 'edit', 'class', 'material-icons edit');
  const removeButton = createElement('span', 'delete', 'class', 'material-icons delete');
  recipeDiv.append(recipeName, ingredientsP, directionsP, editButton, removeButton);
  recipeContainer.prepend(recipeDiv);
};
