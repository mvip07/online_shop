const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  // MongoClient.connect('mongodb://AdminYako:eB76C+Nq!gYHX^da@localhost:27017/admin')
  MongoClient.connect("mongodb://localhost:27017/online_shop")
    .then((client) => {
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database Found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
