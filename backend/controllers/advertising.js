const getDb = require("../util/db").getDb;
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const Advertising = require("../models/advertising");

exports.getAdvertisings = (req, res) => {
    Advertising.getAdvertising().then(products => {
        return res.json(products);
    });
};

exports.getAdvertisingDetail = (req, res) => {
    Advertising.getAdvertisingDetail(req.params.id)
        .then(product => res.send(product));
}

exports.createAdvertising = (req, res) => {
    const { firma, type } = req.body;

    try {
        const advertising = new Advertising(firma, type, req.file.path);
        advertising.createAdvertising();
        return res.status(200).json({ message: "You are cool!" });
    } catch (err) {
        return res.status(500).json({ err: err, message: "Something is wrong!" });
    }
};

exports.deleteAdvertising = (req, res) => {
    const db = getDb();

    return db.collection("Advertising")
        .deleteOne({ _id: ObjectId(req.params.id) })
        .then(() => res.status(200).json({ message: "You are cool!" }))
        .catch(() => res.status(500).json({ message: "You are not cool!" }));
};
