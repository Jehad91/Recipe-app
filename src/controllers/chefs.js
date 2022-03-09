/* eslint-disable linebreak-style */
const chefs = require('../database/queries/getChefs');

const getChefs = (req, res) => {
  chefs()
    .then((data) => res.json(data.rows))
    .catch((err) => console.log('err:', err));
};

module.exports = getChefs;
