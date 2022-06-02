const path = require("path");
const express = require("express");
const multer = require("multer");

const productController = require("./controllers/product");
const authController = require("./controllers/auth");
const isAuth = require("./util/isAuth");
const User = require("./models/user");
const mongoConnect = require("./util/db").mongoConnect;

const app = express();
require("dotenv").config();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/products", productController.getProducts);
app.get("/products/:id", productController.getProductDetail);

app.delete("/products/:id", isAuth, productController.deleteProduct);
app.post("/product", isAuth, productController.createProduct);

app.post("/login", authController.login);
app.post("/signup", authController.signup);

mongoConnect(() => {
  app.listen(8000, () => console.log("Server Started!"));

    // const user = new User("admin", "admin");
    // user.save();
});
