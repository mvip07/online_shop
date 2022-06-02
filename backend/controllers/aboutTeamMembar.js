const getDb = require("../util/db").getDb;
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const AboutTeamMembar = require("../models/aboutTeamMembar");

exports.getAboutTeamMembars = (req, res) => {
    AboutTeamMembar.getAboutTeamMembar().then(products => {
        return res.json(products);
    });
};

exports.getAboutTeamMembarDetail = (req, res) => {
    AboutTeamMembar.getAboutTeamMembarDetail(req.params.id)
        .then(product => res.send(product));
}

exports.createAboutTeamMembar = (req, res) => {
    const { title, job, description, githubUrl, facebookUrl, twitterUrl, linkedinUrl } = req.body;

    try {
        const aboutTeamMembar = new AboutTeamMembar(title, job, description, githubUrl, facebookUrl, twitterUrl, linkedinUrl, req.file.path);
        aboutTeamMembar.createAboutTeamMembar();
        return res.status(200).json({ message: "You are cool!" });
    } catch (err) {
        return res.status(500).json({ err: err, message: "Something is wrong!" });
    }
};

exports.deleteAboutTeamMembar = (req, res) => {
    const db = getDb();

    return db.collection("AboutTeamMembar")
        .deleteOne({ _id: ObjectId(req.params.id) })
        .then(() => res.status(200).json({ message: "You are cool!" }))
        .catch(() => res.status(500).json({ message: "You are not cool!" }));
};
