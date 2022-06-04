const getDb = require("../util/db").getDb;
const bcrypt = require("bcryptjs");

class User {
    constructor(firstname, lastname, email, telephone, fax, company, address1, address2, city, postCode, country, password, passwordConfirm) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.telephone = telephone;
        this.fax = fax;
        this.company = company;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.postCode = postCode;
        this.country = country;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.createDate = new Date()
    }

    save() {
        const db = getDb();
        return db.collection("users").findOne({ email: this.email }).then(user => {
            if (user) {
                console.log("User with this email already exsits!")
            } else {
                const hashedPassword = bcrypt.hashSync(this.password, 12);
                return db.collection("users").insertOne({
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    telephone: this.telephone,
                    fax: this.fax,
                    company: this.company,
                    address1: this.address1,
                    address2: this.address2,
                    city: this.city,
                    postCode: this.postCode,
                    country: this.country,
                    password: hashedPassword,
                    passwordConfirm: this.passwordConfirm,
                    date: this.createDate,
                });
            }
        });
    }

    static findUser(email) {
        const db = getDb();
        return db.collection("users").findOne({ email: email }).then(user => user);
    }
}

module.exports = User;