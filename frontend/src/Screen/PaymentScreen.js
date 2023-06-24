import React, { useState } from 'react'
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer.js'
import CheckoutSteps from '../components/CheckoutSteps.js'
import { savePaymentMethod } from '../actions/cartAction.js'


const PaymentScreen = () => {
   let navigateLog = useNavigate()

   const cart = useSelector(state => state.cart)
   const { shippingAddress } = cart

   if (!shippingAddress) {
      navigateLog('/shipping')
   }

   const [paymentMethod, setPaymentMethod] = useState('PayPal')

   const dispatch = useDispatch()

   const submitHandler = (e) => {
      e.preventDefault()
      dispatch(savePaymentMethod(paymentMethod))
      navigateLog('/placeorder')
   }




   return (<FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>


         <Form.Group>
            <Form.Label as='legend'>Select Method</Form.Label>
            <Col>
               <Form.Check
                  type='radio'
                  label='PayPal or Credit Card'
                  id='PayPal'
                  name='paymentMethod'
                  value='PayPal'
                  checked
                  onChange={(e) => setPaymentMethod(e.target.value)}
               ></Form.Check>


               {/* <Form.Check
                  type='radio'
                  label='UPI'
                  id='Upi'
                  name='paymentMethod'
                  value='Upi'
                  onChange={(e) => setPaymentMethod(e.target.value)}
               ></Form.Check>

               <Form.Check
                  type='radio'
                  label='Cash on delivery'
                  id='cod'
                  name='paymentMethod'
                  value='cod'
                  onChange={(e) => setPaymentMethod(e.target.value)}
               ></Form.Check> */}
            </Col>

         </Form.Group>

         <Button type='submit' variant='primary'>Continue</Button>


      </Form>
   </FormContainer>
   )
}

export default PaymentScreen