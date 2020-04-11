const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION } = require('./config');

// Load routings
const productRoutes = require("./routers/product");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Config Header http

// Routes basics
app.use(`/api/${API_VERSION}`, productRoutes);

module.exports = app;

