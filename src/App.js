import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
import Faqs from "./containers/faqs/faqs";
import BlogDetail from "./containers/blog/blogDetail";

import ProductDetail from "./components/product/productDetail"

import PrivateRouter from "./utils/privateRouter"
import AdminPrivateRouter from "./utils/adminPrivateRouter";

// Admin file da import qilganlar
import AdminLogin from "./admin/containers/adminLogin";
import AdminSignup from "./admin/containers/adminSignUp";
import Admin from "./admin/containers/admin";
import AdminNrandFr from "./utils/adminNrandFr";

import AllProduct from "./admin/containers/products/product"
import AddProduct from "./admin/containers/products/addProduct"
import UpdateProduct from "./admin/containers/products/productUpdate"

import AllAdvertising from "./admin/containers/advertising/advertising"
import AddAdvertising from "./admin/containers/advertising/addAdvertising"
import UpdateAdvertising from "./admin/containers/advertising/advertisingUpdate"

import AllAboutCompany from "./admin/containers/aboutCompany/aboutCompany"
import AddAboutCompany from "./admin/containers/aboutCompany/addAboutCompany"
import UpdateAboutCompany from "./admin/containers/aboutCompany/aboutCompanyUpdate"

import AllAboutTeamMembear from "./admin/containers/aboutTeamMembear/aboutTeamMembear";
import AddAboutTeamMembear from "./admin/containers/aboutTeamMembear/addAboutTeamMembear";
import UpdateAboutTeamMembear from "./admin/containers/aboutTeamMembear/aboutTeamMemberUpdate";

import AllBlog from "./admin/containers/blog/blog"
import AddBlog from "./admin/containers/blog/addBlog"
import UpdateBlog from "./admin/containers/blog/blogUpdate"

import AllSearchCategory from "./admin/containers/searchCategory/searchCategory"
import AddSearchCategory from "./admin/containers/searchCategory/addSearchCategory"
import UpdateSearchCategory from "./admin/containers/searchCategory/searchCategoryUpdate"

import AllFaq from "./admin/containers/faq/faq"
import AddFaq from "./admin/containers/faq/addFaq"
import UpdateFaq from "./admin/containers/faq/faqUpdate"

function App() {
	const { pathname } = useLocation();
	let Usertoken = JSON.parse(localStorage.getItem("onlineShopUser"))?.token
	const navigate = useNavigate();
	useEffect(() => {
		if (Usertoken && pathname == "/login") navigate("/");
	}, [Usertoken, navigate, pathname])
	return (
		<Routes>
			<Route path="/adminLogin"
				element={
					<AdminNrandFr >
						<AdminLogin />
					</AdminNrandFr>
				}
			/>

			<Route path="/adminSignUp"
				element={
					<AdminNrandFr >
						<AdminSignup />
					</AdminNrandFr>
				}
			/>

			<Route path="/admin"
				element={
					<AdminPrivateRouter>
						<AdminNrandFr >
							<Admin />
						</AdminNrandFr >
					</AdminPrivateRouter>
				}
			/>

			<Route path="/all/product"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<AllProduct />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>

			<Route path="/create/product"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<AddProduct />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>

			<Route path="/product/edit/:id"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<UpdateProduct />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>


			<Route path="/all/advertising"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<AllAdvertising />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>

			<Route path="/create/advertising"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<AddAdvertising />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>

			<Route path="/advetising/edit/:id"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<UpdateAdvertising />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>


			<Route path="/all/blog"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<AllBlog />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>

			<Route path="/create/blog"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<AddBlog />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>

			<Route path="/blog/edit/:id"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<UpdateBlog />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>


			<Route path="/all/about/team/member"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<AllAboutTeamMembear />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>

			<Route path="/create/about/team/member"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<AddAboutTeamMembear />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>

			<Route path="/about/team/member/edit/:id"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<UpdateAboutTeamMembear />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>


			<Route path="/all/about/company"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<AllAboutCompany />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>

			<Route path="/create/about/company"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<AddAboutCompany />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>

			<Route path="/about/company/edit/:id"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<UpdateAboutCompany />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>


			<Route path="/all/search/category"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<AllSearchCategory />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>

			<Route path="/create/search/category"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<AddSearchCategory />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>

			<Route path="/search/category/edit/:id"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<UpdateSearchCategory />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>


			<Route path="/all/faq"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<AllFaq />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>

			<Route path="/create/faq"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<AddFaq />
						</AdminNrandFr>
					</AdminPrivateRouter>
				}
			/>

			<Route path="/faq/edit/:id"
				element={
					<AdminPrivateRouter >
						<AdminNrandFr >
							<UpdateFaq />
						</AdminNrandFr>
					</AdminPrivateRouter>
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

			<Route path="/blog-detail/:id"
				element={
					<PrivateRouter>
						<BlogDetail />
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
						<Faqs />
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
