const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  // mongodb+srv://muhammad:<password>@cluster0.77ovg.mongodb.net/?retryWrites=true&w=majority
  // mongodb://localhost:27017/online_shop
  MongoClient.connect("mongodb+srv://muhammad:ZSAu5MGCki2PpTVd@cluster0.77ovg.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
