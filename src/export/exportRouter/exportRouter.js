import { Route, Routes } from 'react-router-dom';
import Home from "../../containers/home/home"

export const routes = (
    <Routes>
        <Route path="/sessionstate1" element={<Home />} />
    </Routes>
)

// export const Category = require("../../containers/category/category")
// export const Blog = require("../../containers/blog/blog")
// export const About = require("../../containers/about/about")
// export const ProductsContainer = require("../../containers/products/products")
// export const ShoppingCart = require("../../containers/shoppingCartPage/shoppingCart")

// export const AdminLogin = require("../../admin/adminLogin")
// export const AdminSignup = require("../../admin/adminSignUp")
// export const AdminMain = require("../../admin/adminMain")
// export const AddProduct = require("../../admin/products/addProduct")
// export const AddAdvertising = require("../../admin/advertising/addAdvertising")
// export const AddBlog = require("../../admin/blog/addBlog")
// export const AddAboutTeamMembear = require("../../admin/aboutTeamMembear/addAboutTeamMembear")
// export const AddAboutCompany = require("../../admin/aboutCompany/aboutCompany")
// export const AdminPrivateRouter = require("../../admin/utils/adminPrivateRouter")

// export const PrivateRouter = require("../../components/privateRouter/privateRouter");
// export const ProductDetail = require("../../components/product/productDetail");
// export const Checkout = require("../../components/chekout/chekout");
// export const Compare = require("../../components/compare/compare");
// export const Wishlist = require("../../components/wishlist/wishlist");
// export const OrderHistory = require("../../components/orderHistory/orderHistory");
// export const OrderInformation = require("../../components/orderInformation/orderInformation");
// export const ProductReturn = require("../../components/productReturn/productReturn");
// export const GiftVoucher = require("../../components/giftVoucher/giftVoucher");
// export const Contact = require("../../components/contact/contact");
// export const Faq = require("../../components/faq/faq");
// export const Login = require("../../components/login/login");
// export const Register = require("../../components/register/register");
// export const MyAccount = require("../../components/myAccount/myAccount");