/* eslint-disable linebreak-style */
const express = require('express');
const path = require('path');
const compression = require('compression');
// const router = require('./controllers');

const app = express();

app.disable('x-powered-by');
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('port', process.env.PORT || 4000);

// app.use(router);

module.exports = app;
