const express = require("express");
const ProductController = require('../controllers/product');


const api = express.Router();

api.post("/add-products", ProductController.addProducts);
api.get("/get-products", ProductController.getProducts);

module.exports = api;