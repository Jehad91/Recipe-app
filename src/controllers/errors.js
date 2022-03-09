/* eslint-disable linebreak-style */
const path = require('path');

const error404 = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', 'html', '404.html'));
};

const error500 = (req, res) => {
  res.status(500).sendFile(path.join(__dirname, '..', '..', 'public', 'html', '500.html'));
};

module.exports = {
  error404,
  error500,
};
