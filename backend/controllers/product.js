const getDb = require("../util/db").getDb;
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const Product = require("../models/product");

exports.getProducts = (req, res) => {
    Product.getProducts().then(products => {
        return res.json(products);
    });
};

exports.getProductDetail = (req, res) => {
    Product.getProductDetail(req.params.id)
        .then(product => res.send(product));
}

exports.createProduct = (req, res) => {
    const { title, model, price, stars, description, type } = req.body;

    try {
        const product = new Product(title, model, price, stars, description, type, req.file.path);
        product.createProduct();
        return res.status(200).json({ message: "You are cool!" });
    } catch (err) {
        return res.status(500).json({ err: err, message: "Something is wrong!" });
    }
};

exports.deleteProduct = (req, res) => {
    const db = getDb();

    return db.collection("products")
        .deleteOne({ _id: ObjectId(req.params.id) })
        .then(() => res.status(200).json({ message: "You are cool!" }))
        .catch(() => res.status(500).json({ message: "You are not cool!" }));
};
