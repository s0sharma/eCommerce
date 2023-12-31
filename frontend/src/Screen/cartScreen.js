import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartAction'


const CartScreen = ({ match, history }) => {
   const { id } = useParams()
   const { search } = useLocation();
   // const [searchParms] = useSearchParams();

   // const location = useLocation();

   const productId = id

   // ?qty=1: !qty is at index 0 and 1 is at 1 
   const qty = search ? Number(search.split('=')[1]) : 1

   const dispatch = useDispatch()

   const cart = useSelector(state => state.cart)
   const { cartItems } = cart

   console.log(cartItems);

   useEffect(() => {
      if (productId) {
         dispatch(addToCart(productId, qty))
      }
   }, [dispatch, productId, qty])

   const navigate = useNavigate();

   const removeFromCardHandler = (id) => {
      dispatch(removeFromCart(id))
   }

   const checkoutHandler = () => {
      navigate('/login?redirect=/shipping')
   }

   return (
      <Row>
         <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? <Message>Your cart is empty <Link to='/'>Go Back</Link> </Message> :
               (<ListGroup variant='flush'>
                  {cartItems.map(item => (
                     <ListGroupItem key={item.product}>
                        <Row>
                           <Col md={2}>
                              <Image src={item.image} alt={item.name} fluid rounded />
                           </Col>
                           <Col md={3}>
                              <Link to={`/product/${item.product}`}>{item.name}</Link>
                           </Col>
                           <Col md={2}>
                              ₹{item.price}
                           </Col>
                           <Col md={2}>
                              <Form.Control style={{ appearance: 'auto' }} as='select' value={item.qty} onChange={(e) =>
                                 dispatch(addToCart(item.product, Number(e.target.value)))}>
                                 {[...Array(item.countInStock).keys()].map(x => (
                                    <option key={x + 1} value={x + 1}>
                                       {x + 1}
                                    </option>
                                 ))}
                              </Form.Control>
                           </Col>
                           <Col md={2}> <Button type='button' variant='light' onClick={() =>
                              removeFromCardHandler(item.product)}>
                              <i className='fas fa-trash'></i>
                           </Button> </Col>
                        </Row>
                     </ListGroupItem>
                  ))}
               </ListGroup>
               )}
         </Col>
         <Col md={4}>
            <Card>
               <ListGroup variant='flush'>
                  <ListGroupItem>
                     <h2>Subtoal ({cartItems.reduce((acc, item) =>
                        acc + item.qty, 0
                     )}) items </h2>
                     ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                  </ListGroupItem>
                  <ListGroupItem>
                     <Button type='button' className='btn-block' disabled={cartItems.length === 0}
                        onClick={checkoutHandler}>
                        Proceed To Checkout
                     </Button>
                  </ListGroupItem>
               </ListGroup>
            </Card>
         </Col>

      </Row >
   )
}

export default CartScreen