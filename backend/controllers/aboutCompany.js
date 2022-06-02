const getDb = require("../util/db").getDb;
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const AboutCompany = require("../models/aboutCompany");

exports.getAboutCompanys = (req, res) => {
    AboutCompany.getAboutCompanys().then(products => {
        return res.json(products);
    });
};

exports.getAboutCompanyDetail = (req, res) => {
    AboutCompany.getAboutCompanyDetail(req.params.id)
        .then(product => res.send(product));
}

exports.createAboutCompany = (req, res) => {
    const { title } = req.body;

    try {
        const aboutCompany = new AboutCompany(title, req.file.path);
        aboutCompany.createAboutCompany();
        return res.status(200).json({ message: "You are cool!" });
    } catch (err) {
        return res.status(500).json({ err: err, message: "Something is wrong!" });
    }
};

exports.deleteAboutCompany = (req, res) => {
    const db = getDb();

    return db.collection("AboutCompany")
        .deleteOne({ _id: ObjectId(req.params.id) })
        .then(() => res.status(200).json({ message: "You are cool!" }))
        .catch(() => res.status(500).json({ message: "You are not cool!" }));
};
