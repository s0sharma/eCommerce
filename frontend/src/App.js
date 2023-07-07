import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './Screen/HomeScreen'
import ProductScreen from './Screen/ProductScreen'
import cartScreen from './Screen/cartScreen'
import LoginScreen from './Screen/LoginScreen'
import RegisterScreen from './Screen/RegisterScreen'
import ProfileScreen from './Screen/ProfileScreen'
import ShippingScreen from './Screen/ShippingScreen'
import PaymentScreen from './Screen/PaymentScreen'
import PlaceOrderScreen from './Screen/PlaceOrderScreen'
import OrderScreen from './Screen/OrderScreen'
import UserListScreen from './Screen/UserListScreen'
import UserEditScreen from './Screen/UserEditScreen'
import ProductListScreen from './Screen/ProductListScreen'
import ProductEditScreen from './Screen/ProductEditScreen'
import OrderListScreen from './Screen/OrderListScreen'

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					{/* Exact is beacuse we want to match path exactly to / */}
					<Routes>
						{/* What components do we load when go to that path */}
						<Route path="/order/:id" Component={OrderScreen} />
						<Route path="/shipping" Component={ShippingScreen} />
						<Route path="/payment" Component={PaymentScreen} />
						<Route path="/placeorder" Component={PlaceOrderScreen} />
						<Route path="/login" Component={LoginScreen} />
						<Route path="/register" Component={RegisterScreen} />
						<Route path="/profile" Component={ProfileScreen} />
						<Route path="/product/:id" Component={ProductScreen} />
						<Route path="/cart/:id?" Component={cartScreen} /> {/* This: ? makes it optional, because when we go to a cart link it will not have a id */}
						<Route path="/admin/userlist" Component={UserListScreen} />
						<Route path="/admin/user/:id/edit" Component={UserEditScreen} />
						<Route path="/admin/productlist" Component={ProductListScreen} exact />
						<Route path="/admin/productlist/:pageNumber" Component={ProductListScreen} exact />
						<Route path="/admin/product/:id/edit" Component={ProductEditScreen} />
						<Route path="/admin/orderlist" Component={OrderListScreen} />
						<Route path="/search/:keyword" Component={HomeScreen} exact />
						<Route path="/page/:pageNumber" Component={HomeScreen} exact />
						<Route path="/search/:keyword/page/:pageNumber" Component={HomeScreen} exact />
						<Route path="/" Component={HomeScreen} exact />

					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
