/* eslint-disable linebreak-style */
const { beforeEach, afterAll, test, expect } = require('@jest/globals');
const dbBuild = require('../database/config/build');
const connection = require('../database/config/connection');

const getData = require('../database/queries/getData');
const postData = require('../database/queries/postData');

beforeEach(() => dbBuild());
afterAll(() => connection.end());

test('Test get Recipe', () => getData()
  .then((data) => {
    expect(data.rows.length).toBe(1);
  }));

test('Test Add Data', () => postData('pizza', 'cheese', 'just cook', 1)
  .then((data) => {
    expect(data.rows[0].recipe_name).toBe('pizza');
  }));
