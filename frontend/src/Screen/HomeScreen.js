import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
	const [products, setProduts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('/api/products')

			setProduts(data)
		}

		fetchProducts()
	}, [])

	return (
		<>
			<h1> Latest Product </h1>
			<Row>
				{products.map((product) => (
					//Need to pass a unique key for each product
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} /> {/* props: name={"hello"}  */}
					</Col>
				))}
			</Row>
		</>
	)
}

export default HomeScreen
