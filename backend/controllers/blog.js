const getDb = require("../util/db").getDb;
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const Blog = require("../models/blog");

exports.getBlogs = (req, res) => {
    Blog.getBlog().then(products => {
        return res.json(products);
    });
};

exports.getBlogDetail = (req, res) => {
    Blog.getBlogDetail(req.params.id)
        .then(product => res.send(product));
}

exports.createBlog = (req, res) => {
    const { title, description, postIntruder } = req.body;

    try {
        const blog = new Blog(title, description, postIntruder, req.file.path);
        blog.createBlog();
        return res.status(200).json({ message: "You are cool!" });
    } catch (err) {
        return res.status(500).json({ err: err, message: "Something is wrong!" });
    }
};

exports.deleteBlog = (req, res) => {
    const db = getDb();

    return db.collection("Blog")
        .deleteOne({ _id: ObjectId(req.params.id) })
        .then(() => res.status(200).json({ message: "You are cool!" }))
        .catch(() => res.status(500).json({ message: "You are not cool!" }));
};
