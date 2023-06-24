import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/paginate';
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';
import { useParams } from 'react-router-dom';


const HomeScreen = () => {
	const { keyword, pageNumber } = useParams()
	// const keyword = match.params.keyword
	const pageNo = pageNumber || 1


	const dispatch = useDispatch()

	const productList = useSelector(state => state.productList)
	const { loading, error, products, page, pages } = productList

	useEffect(() => {
		dispatch(listProducts(keyword, pageNo))

	}, [dispatch, keyword, pageNo])


	return (
		<>
			<Meta />
			{!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light'> Go Back </Link>}
			<h1> Latest Product </h1>
			{loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
				(
					<>
						<Row>
							{products.map((product) => (
								//Need to pass a unique key for each product
								<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
									<Product product={product} /> {/* props: name={"hello"}  */}
								</Col>
							))}
						</Row>
						<Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}></Paginate>
					</>
				)
			}

		</>
	)
}

export default HomeScreen
