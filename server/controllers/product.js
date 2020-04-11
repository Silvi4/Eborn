const Product = require("../models/product");


function addProducts(req,res) {
    const { name, imgUrl, price, color, size} = req.body;
    const product = new Product();
    product.name = name,
    product.imgUrl = imgUrl,
    product.price = price,
    product.color = color,
    product.size = size

    product.save((err, createProduct) => {
        if (err) {
            res.status(500).send({ message: "Error del servidor" });
        } else {
            if (!createProduct) {
                res.status(404).send({ message: "Error al crear el producto." });
            } else {
                res.status(200).send({ message: "Producto creado correctamente"})
            }
        }
    })
}

function getProducts(req,res) {
    Product.find().then(products => {
        if (!products) {
            res.status(404).send({ message: "No se ha encontrado ningún producto." });
        } else {
            res.status(200).send({ products });
        }
    }).catch(err => {
        res.status(500).send({ err })
    })
}

module.exports = {
    addProducts,
    getProducts
}