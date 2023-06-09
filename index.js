const express = require('express');
const routes = require('./routes')
const mongoose = require('mongoose')

const cwd = process.cwd();

const PORT = 3026;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(routes);
const connection = mongoose.connection


connection.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server for ME running on port ${PORT}!`);
    });
  });