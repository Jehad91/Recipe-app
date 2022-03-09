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
    data.forEach((e) => {
      creatRecipe(e.recipe_name, e.ingredients, e.directions);
      document.querySelector('.delete').onclick = () => {
        deleteRecipe(e.id)
          .then(() => {
            window.location = '/';
          });
      };
    });
  });
