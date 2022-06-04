const getDb = require("../util/db").getDb;
const bcrypt = require("bcryptjs");

class AdminUser {
    constructor(username, password, passwordConfirm) {
        this.username = username;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.createDate = new Date()
    }

    save() {
        const db = getDb();
        return db.collection("admin").findOne({ username: this.username }).then(user => {
            if (user) {
                console.log("User with this email already exsits!")
            } else {
                const hashedPassword = bcrypt.hashSync(this.password, 12);
                return db.collection("admin").insertOne({
                    username: this.username,
                    password: hashedPassword,
                    passwordConfirm: this.passwordConfirm,
                    date: this.createDate,
                });
            }
        });
    }

    static findUser(username) {
        const db = getDb();
        return db.collection("admin").findOne({ username: username }).then(user => user);
    }
}

module.exports = AdminUser;