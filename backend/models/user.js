const getDb = require("../util/db").getDb;
const bcrypt = require("bcryptjs");

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    save() {
        const db = getDb();
        return db.collection("users").findOne({ username: this.username }).then(user => {
            if (user) {
                console.log("User with this email already exsits!")
            } else {
                const hashedPassword = bcrypt.hashSync(this.password, 12);
                return db.collection("users").insertOne({
                    username: this.username,
                    password: hashedPassword,
                });
            }
        });
    }

    static findUser(username) {
        const db = getDb();
        return db.collection("users").findOne({ username: username }).then(user => user);
    }
}

module.exports = User;