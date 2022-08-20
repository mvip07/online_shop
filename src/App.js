import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import "./css/bootstrap/css/bootstrap.css"
import "./css/font-awesome/css/font-awesome.css"
import "./css/themecss/so_megamenu.css"
import "./css/themecss/so-categories.css"
import "./css/themecss/so-listing-tabs.css"
import "./css/themecss/so-newletter-popup.css"
import "./css/themecss/just_purchased_notification.css"
import "./css/footer3.css"
import "./css/header6.css"
import "./css/home6.css"
import "./css/theme.css"
import "./css/responsive.css"

// Containner file da import qilingalar
import Home from "./containers/home/home";
import Category from "./containers/category/category";
import Blog from "./containers/blog/blog";
import About from "./containers/about/about";
import ProductsContainer from "./containers/products/products";
import ShoppingCart from "./containers/shoppingCartPage/shoppingCart";
import Compare from "./containers/compare/compare";
import Wishlist from "./containers/wishlist/wishlist";
import GiftVoucher from "./containers/giftVoucher/giftVoucher"
import Login from './containers/login/login'
import Register from "./containers/register/register"
import OrderHistory from "./containers/orderHistory/orderHistory";
import MyAccount from "./containers/myAccount/myAccount";
import Checkout from "./containers/chekout/chekout"
import OrderInformation from "./containers/orderInformation/orderInformation"
import ProductReturn from "./containers/productReturn/productReturn"
import Contact from "./containers/contact/contact"
import Faq from "./containers/faq/faq"

import ProductDetail from "./components/product/productDetail"
import PrivateRouter from "./utils/privateRouter"
import AdminPrivateRouter from "./utils/adminPrivateRouter";

// Admin file da import qilganlar
import AdminLogin from "./admin/adminLogin";
import AdminSignup from "./admin/adminSignUp";
import AdminMain from "./admin/adminMain";
import AddProduct from "./admin/products/addProduct";
import AddAdvertising from "./admin/advertising/addAdvertising";
import AddBlog from "./admin/blog/addBlog";
import AddAboutTeamMembear from "./admin/aboutTeamMembear/addAboutTeamMembear";
import AddAboutCompany from "./admin/aboutCompany/addAboutCompany";
import AdvertisingUpdate from "./admin/advertising/advertisingUpdate";
import ProductUpdate from "./admin/products/productUpdate";

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

			<Route path="advertising/update/:id"
				element={
					<AdvertisingUpdate />
				}
			/>

			<Route path="product/update/:id"
				element={
					<ProductUpdate />
				}
			/>

			<Route path="/"
				element={
					<PrivateRouter>
						<Home />
					</PrivateRouter>
				}
			/>

			<Route path="/cart"
				element={
					<PrivateRouter>
						<ProductsContainer />
					</PrivateRouter>
				}
			/>

			<Route path="/productDetail/:id"
				element={
					<PrivateRouter>
						<ProductDetail />
					</PrivateRouter>
				}
			/>

			<Route path="/category"
				element={
					<PrivateRouter>
						<Category />
					</PrivateRouter>
				}
			/>

			<Route path="/shoppingCartPage"
				element={
					<PrivateRouter>
						<ShoppingCart />
					</PrivateRouter>
				}
			/>

			<Route path="/checkout"
				element={
					<PrivateRouter>
						<Checkout />
					</PrivateRouter>
				}
			/>

			<Route path="/compare"
				element={
					<PrivateRouter>
						<Compare />
					</PrivateRouter>
				}
			/>

			<Route path="/wishlist"
				element={
					<PrivateRouter>
						<Wishlist />
					</PrivateRouter>
				}
			/>

			<Route path="/order-history"
				element={
					<PrivateRouter>
						<OrderHistory />
					</PrivateRouter>
				}
			/>

			<Route path="/order-information"
				element={
					<PrivateRouter>
						<OrderInformation />
					</PrivateRouter>
				}
			/>

			<Route path="/return"
				element={
					<PrivateRouter>
						<ProductReturn />
					</PrivateRouter>
				}
			/>

			<Route path="/gift-voucher"
				element={
					<PrivateRouter>
						<GiftVoucher />
					</PrivateRouter>
				}
			/>

			<Route path="/blog"
				element={
					<PrivateRouter>
						<Blog />
					</PrivateRouter>
				}
			/>

			<Route path="/about"
				element={
					<PrivateRouter>
						<About />
					</PrivateRouter>
				}
			/>

			<Route path="/contact"
				element={
					<PrivateRouter>
						<Contact />
					</PrivateRouter>
				}
			/>

			<Route path="/faq"
				element={
					<PrivateRouter>
						<Faq />
					</PrivateRouter>
				}
			/>

			<Route path="/myAccount"
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
