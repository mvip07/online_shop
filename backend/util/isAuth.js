const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.get("Authorization").split(" ")[1];
    let decodedToken;
    try {
        decodedToken = jwt.decode(token, "mysecr8yGU&a=?k$&NpQzt9ev&kE=TPB7+HNAf7@kYd=EhUncxKhP&uC4aPN%GwZtM5v4?tWET4yN=Y263V3xd-uZ*EaN%et");
    } catch (err) {
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken) {
        const error = new Error("Not Authenticated");
        error.statusCode = 401;
        throw error;
    }
    next();
};
