const express = require('express');
const routes = require('./routes')
const mongoose = require('mongoose')
const app = express();
const PORT = 3026;

const User = require('./models/user')

mongoose.connect('mongodb://127.0.0.1:27017/socialNetwork_db')

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(routes);



const connection = mongoose.connection
connection.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server for ME running on port ${PORT}!`);
    });
  });