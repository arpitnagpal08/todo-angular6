const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const PORT = process.env.PORT || 3000;
const path = require("path")

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'dist/todos')));

// ROUTES
const users = require("./routes/api");
app.use("/user", users);

module.exports = app;