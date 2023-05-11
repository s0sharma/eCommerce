import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './Screen/HomeScreen'
import ProductScreen from './Screen/ProductScreen'

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					{/* Exact is beacuse we want to match path exactly to / */}
					<Routes>
						<Route path="/" Component={HomeScreen} exact />
						<Route path="/product/:id" Component={ProductScreen} />
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
