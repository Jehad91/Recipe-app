/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

// Delete Data From Database
const deleteRecipe = (id) => fetch(`/delete-recipe/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
});

// Get Data From Database
fetch('/recipes')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((el) => {
      creatRecipe(el.recipe_name, el.ingredients, el.directions, el.chef_name, el.chef_country);
      document.querySelector('.delete').onclick = () => {
        deleteRecipe(el.id)
          .then(() => {
            window.location = '/';
          });
      };
    });
  });
