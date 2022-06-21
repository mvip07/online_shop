const path = require("path");
const express = require("express");
const multer = require("multer");

const productController = require("./controllers/product");
const aboutCompany = require("./controllers/aboutCompany")
const aboutTeamMembar = require("./controllers/aboutTeamMembar")
const blog = require("./controllers/blog")
const advertising = require("./controllers/advertising")

const authControllerUser = require("./controllers/user");
const authControllerAdmin = require("./controllers/adminUser")
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
    file.mimetype === "video/mp4" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/svg" ||
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
// app.use(express.static(path.join(__dirname, "public")));
app.use("./images", express.static(path.join(__dirname, "images")));

app.get("/products", productController.getProducts);
app.get("/product/:id", productController.getProductDetail);
app.delete("/product/:id", isAuth, productController.deleteProduct);
app.post("/product", isAuth, productController.createProduct);

app.get("/aboutCompanys", aboutCompany.getAboutCompanys);
app.get("/aboutCompany/:id", aboutCompany.getAboutCompanyDetail);
app.delete("/aboutCompany/:id", isAuth, aboutCompany.deleteAboutCompany);
app.post("/aboutCompany", isAuth, aboutCompany.createAboutCompany);

app.get("/aboutTeamMembars", aboutTeamMembar.getAboutTeamMembars);
app.get("/aboutTeamMembar/:id", aboutTeamMembar.getAboutTeamMembarDetail);
app.delete("/aboutTeamMembar/:id", isAuth, aboutTeamMembar.deleteAboutTeamMembar);
app.post("/aboutTeamMembar", isAuth, aboutTeamMembar.createAboutTeamMembar);

app.get("/blogs", blog.getBlogs);
app.get("/blog/:id", blog.getBlogDetail);
app.delete("/blog/:id", isAuth, blog.deleteBlog);
app.post("/blog", isAuth, blog.createBlog);

app.get("/advertisings", advertising.getAdvertisings);
app.get("/advertising/:id", advertising.getAdvertisingDetail);
app.delete("/advertising/:id", isAuth, advertising.deleteAdvertising);
app.post("/advertising", isAuth, advertising.createAdvertising);


app.post("/adminLogin", authControllerAdmin.login);
app.post("/adminSignup", authControllerAdmin.signup);

app.post("/login", authControllerUser.login);
app.post("/signup", authControllerUser.signup);

mongoConnect(() => {
  app.listen(process.env.PORT || 8000, () => console.log("Server Started!"));

});
