/* eslint-disable linebreak-style */
const { readFileSync } = require('fs');
const path = require('path');
const connection = require('./connection');

const dbBuild = () => {
  const sql = readFileSync(path.join(__dirname, 'build.sql')).toString();
  return connection.query(sql);
};

module.exports = dbBuild;
