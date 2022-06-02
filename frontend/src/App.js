import "./App.css";
import { Route, Routes } from "react-router-dom";

// Containner file da import qilingalar
import Home from "./containers/home/home.js";
import Category from "./containers/category/category";
import Blog from "./containers/blog/blog";
import About from "./containers/about/about";
import ProductsContainer from "./containers/products/products";
import ShoppingCart from "./containers/shoppingCartPage/shoppingCart";

// Admin file da import qilganlar
import AdminLogin from "./admin/adminLogin";
import AdminSignup from "./admin/adminSignUp";
import AdminMain from "./admin/adminMain";
import AddProduct from "./admin/products/addProduct";
import AddAdvertising from "./admin/advertising/addAdvertising";
import AddBlog from "./admin/blog/addBlog";
import AddAboutTeamMembear from "./admin/aboutTeamMembear/addAboutTeamMembear";
import AddAboutCompany from "./admin/aboutCompany/addAboutCompany";
import AdminPrivateRouter from "./admin/utils/adminPrivateRouter";
// Components file da import qilganlar
import PrivateRouter from "./components/privateRouter/privateRouter";
import ProductDetail from "./components/product/productDetail";
import Checkout from "./components/chekout/chekout";
import Compare from "./components/compare/compare";
import Wishlist from "./components/wishlist/wishlist";
import OrderHistory from "./components/orderHistory/orderHistory";
import OrderInformation from "./components/orderInformation/orderInformation";
import ProductReturn from "./components/productReturn/productReturn";
import GiftVoucher from "./components/giftVoucher/giftVoucher";
import Contact from "./components/contact/contact";
import Faq from "./components/faq/faq";
import Login from "./components/login/login";
import Register from "./components/register/register";
import MyAccount from "./components/myAccount/myAccount";

function App() {
	return (
		<Routes>
			<Route path="/adminLogin"
				element={
					<AdminLogin />
				}
			/>

			<Route path="/adminSignUp"
				element={
					<AdminSignup />
				}
			/>

			<Route path="/adminMain"
				element={
					<AdminPrivateRouter>
						<AdminMain />
					</AdminPrivateRouter>
				}
			/>

			<Route path="/createProduct"
				element={
					<AdminPrivateRouter >
						<AddProduct />
					</AdminPrivateRouter>
				}
			/>

			<Route path="/createAdvertising"
				element={
					<AdminPrivateRouter >
						<AddAdvertising />
					</AdminPrivateRouter>
				}
			/>

			<Route path="/createBlog"
				element={
					<AdminPrivateRouter >
						<AddBlog />
					</AdminPrivateRouter>
				}
			/>

			<Route path="/createAboutTeamMember"
				element={
					<AdminPrivateRouter >
						<AddAboutTeamMembear />
					</AdminPrivateRouter>
				}
			/>

			<Route path="/createAboutCompany"
				element={
					<AdminPrivateRouter >
						<AddAboutCompany />
					</AdminPrivateRouter>
				}
			/>

			<Route
				path="/"
				element={
					<PrivateRouter>
						<Home />
					</PrivateRouter>
				}
			/>

			<Route
				path="/cart"
				element={
					<PrivateRouter>
						<ProductsContainer />
					</PrivateRouter>
				}
			/>

			<Route
				path="/productDetail/:id"
				element={
					<PrivateRouter>
						<ProductDetail />
					</PrivateRouter>
				}
			/>

			<Route
				path="/category"
				element={
					<PrivateRouter>
						<Category />
					</PrivateRouter>
				}
			/>

			<Route
				path="/shoppingCartPage"
				element={
					<PrivateRouter>
						<ShoppingCart />
					</PrivateRouter>
				}
			/>

			<Route
				path="/checkout"
				element={
					<PrivateRouter>
						<Checkout />
					</PrivateRouter>
				}
			/>

			<Route
				path="/compare"
				element={
					<PrivateRouter>
						<Compare />
					</PrivateRouter>
				}
			/>

			<Route
				path="/wishlist"
				element={
					<PrivateRouter>
						<Wishlist />
					</PrivateRouter>
				}
			/>

			<Route
				path="/order-history"
				element={
					<PrivateRouter>
						<OrderHistory />
					</PrivateRouter>
				}
			/>

			<Route
				path="/order-information"
				element={
					<PrivateRouter>
						<OrderInformation />
					</PrivateRouter>
				}
			/>

			<Route
				path="/return"
				element={
					<PrivateRouter>
						<ProductReturn />
					</PrivateRouter>
				}
			/>

			<Route
				path="/gift-voucher"
				element={
					<PrivateRouter>
						<GiftVoucher />
					</PrivateRouter>
				}
			/>

			<Route
				path="/blog"
				element={
					<PrivateRouter>
						<Blog />
					</PrivateRouter>
				}
			/>

			<Route
				path="/about"
				element={
					<PrivateRouter>
						<About />
					</PrivateRouter>
				}
			/>

			<Route
				path="/contact"
				element={
					<PrivateRouter>
						<Contact />
					</PrivateRouter>
				}
			/>

			<Route
				path="/faq"
				element={
					<PrivateRouter>
						<Faq />
					</PrivateRouter>
				}
			/>

			<Route
				path="/myAccount"
				element={
					<PrivateRouter>
						<MyAccount />
					</PrivateRouter>
				}
			/>

			<Route path="/login"
				element={
					<Login />
				}
			/>

			<Route path="/register"
				element={
					<Register />
				}
			/>
		</Routes>
	);
}
export default App;
