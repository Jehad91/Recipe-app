/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const addRecipeBtn = document.getElementById('add-recipe');
const popupFrom = document.querySelector('.popup-form-overlay');
const closePopupSpan = document.querySelector('.close-span');
const closePopupButton = document.querySelector('.close-btn');
const saveButton = document.querySelector('.save-btn');
const inputRecipeName = document.getElementById('input-recipe-name');
const inputIngreatents = document.getElementById('input-ingreatents');
const inputDirection = document.getElementById('input-direction');
const recipeContainer = document.querySelector('.recipe-container');

// show popup form when click on add recipe button
addRecipeBtn.addEventListener('click', () => {
  inputRecipeName.focus();
  popupFrom.classList.add('show-popup');
});

// Close popup form when click on close Icon
closePopupSpan.addEventListener('click', () => {
  popupFrom.classList.remove('show-popup');
  inputRecipeName.value = '';
  inputIngreatents.value = '';
  inputDirection.value = '';
});

// Close popup form when click on close button
closePopupButton.addEventListener('click', () => {
  popupFrom.classList.remove('show-popup');
  inputRecipeName.value = '';
  inputIngreatents.value = '';
  inputDirection.value = '';
});

// collapse recipe
document.addEventListener('click', (element) => {
  if (element.target.classList.contains('show-btn')) {
    element.path[2].classList.toggle('show');
  }
});
