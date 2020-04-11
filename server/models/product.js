const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProductSchema = Schema({
    name: String,
    imgUrl: String,
    price: Number,
    color: String,
    size: Array
});

module.exports = mongoose.model("Product", ProductSchema);