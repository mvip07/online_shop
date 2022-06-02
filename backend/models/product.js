const getDb = require("../util/db").getDb;
const { ObjectId } = require("mongodb");

class Product {
    constructor(title, model, price, stars, description, type, image) {
        this.title = title;
        this.model = model;
        this.stars = stars;
        this.price = price;
        this.image = image;
        this.type = type;
        this.description = description;
        this.createdDate = new Date();
    }

    static getProducts() {
        const db = getDb();
        
        return db.collection("products").find({}).toArray().then(products => {
            return products.map(product => {
                return {
                    id: product._id,
                    image: product.image,
                    title: product.title,
                    model: product.model,
                    stars: product.stars,
                    type:  product.type,
                    price: product.price,
                    description: product.description,
                }
            })
        });
    };

    static getProductDetail(id) {
        const db = getDb();
        return db.collection("products").findOne({ _id: ObjectId(id) }).then(product => product);
    };

    createProduct() {
        const db = getDb();
        return db.collection("products").insertOne(this);
    }
};

module.exports = Product;
