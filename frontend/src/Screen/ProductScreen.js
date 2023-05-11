import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	ListGroupItem,
} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = ({ match }) => {
	const { id } = useParams()
	// const product = products.find((p) => p._id === id)

	const [product, setProdut] = useState({})

	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/api/products/${id}`)

			setProdut(data)
		}

		fetchProduct()
	}, [])

	return (
		<>
			<Link className="btn btn-light my-3" to="/">
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image src={product.image} alt={product.image} fluid />
				</Col>
				<Col md={3}>
					<ListGroup varient="flush">
						<ListGroupItem>
							<h3>{product.name}</h3>
						</ListGroupItem>
						<ListGroupItem>
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviws`}
							></Rating>
						</ListGroupItem>
						<ListGroupItem>Price: ${product.price}</ListGroupItem>
						<ListGroupItem>
							Description: {product.description}
						</ListGroupItem>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant="flush">
							<ListGroupItem>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>${product.price}</strong>
									</Col>
								</Row>
							</ListGroupItem>

							<ListGroupItem>
								<Row>
									<Col>Status:</Col>
									<Col>
										{product.countInStock > 0
											? 'In Stock'
											: 'Out Of Stock'}
									</Col>
								</Row>
							</ListGroupItem>
							<ListGroupItem>
								<Button
									className="btn-black"
									type="button"
									disabled={product.countInStock === 0}
								>
									Add To Cart
								</Button>
							</ListGroupItem>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default ProductScreen
