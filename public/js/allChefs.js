/* eslint-disable linebreak-style */
const selectChefs = document.getElementById('select-chef');

fetch('/chefs')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((e) => {
      const option = document.createElement('option');
      option.appendChild(document.createTextNode(e.chef_name));
      option.value = e.id;
      selectChefs.append(option);
    });
  });
