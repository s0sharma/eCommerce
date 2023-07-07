import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import FormContainer from '../components/FormContainer.js'
import { login } from '../actions/userActions.js'


const LoginScreen = () => {

   // useState is for only componenet level state
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   let location = useLocation()
   let navigateLog = useNavigate()

   // For dispatching an action (Redux) 
   const dispatch = useDispatch()


   //useSelector is used to selest a particular state from store.js
   //here we are getting userinfo from store.js->combineReducer function
   //From combine reducer we are getting loading, error, and userinfo(This is general format for all the components)
   const userLogin = useSelector(state => state.userLogin)
   const { loading, error, userInfo } = userLogin

   //We extract url information
   const redirect = location.search ? location.search.split('=')[1] : '/'


   //redirect if already loged in 
   useEffect(() => {
      if (userInfo) {
         navigateLog(redirect)
      }

   }, [navigateLog, userInfo, redirect]) //Fireoff the dependencies


   const submitHandler = (e) => {
      e.preventDefault()
      dispatch(login(email, password))
   }

   return (
      <FormContainer>  {/*We created FormContainer, as we are using it at several places*/}
         <h1>Sign In</h1> {/*Sign in Heading */}

         {error && <Message variant='danger'>{error}</Message>}  {/*if we encounter an error the print that message, we got it from useSelector above */}
         {loading && <Loader />}  {/* If  page is loading show loader */}

         {/* onSubmit= : This attribute is used to specify the code that should run when the form is submitted.
         {submitHandler} : It assigns the function  submitHandler  to the  onSubmit  attribute. The curly braces  {}  are used to embed JavaScript code within JSX.
         When the form is submitted, the  submitHandler  function will be called. */}
         <Form onSubmit={submitHandler}>

            {/* form group is a way to group related form elements together, We create two grou email and password for login page */}
            <Form.Group controlId='email'>
               <Form.Label>Email Address</Form.Label>
               {/* sets up an event listener for a change event on an input element. When the input value changes, it calls a function that entered the value of the email variable with the new value entered in the input field.  */}
               {/* onChange : This is an event listener that listens for a change event on the input element.   (e) => : This is an arrow function that takes an event object as a parameter. */}
               {/* setEmail(e.target.value) : This line calls the  setEmail  function and passes the new value entered in the input field as an argument. 
               The  e.target.value  refers to the value of the input element that triggered the change event. By calling  setEmail  with the new value, it updates the value of the  email  variable with the new value.*/}
               <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
               <Form.Label>Password</Form.Label>
               <Form.Control type='password' placeholder='Enter email' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
            </Form.Group>

            <Button className='mt-3' type='submit' variant='primary'>Sign In</Button>

         </Form>

         {/* If a new user arrive then we redirect them to register page */}
         <Row className='py-3'>
            <Col>
               New Customer?{' '}
               <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
            </Col>
         </Row>
      </FormContainer >
   )
}

export default LoginScreen