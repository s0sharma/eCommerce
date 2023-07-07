import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import FormContainer from '../components/FormContainer.js'
import { getUserDetails, updateUser } from '../actions/userActions.js'
import { USER_UPDATE_RESET } from '../constants/userConstants.js'


const UserEditScreen = () => {

   const { id: userId } = useParams()
   console.log("id", userId)



   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [isAdmin, setIsAdmin] = useState(false)



   const dispatch = useDispatch()
   let navigateLog = useNavigate()



   const userDetails = useSelector((state) => state.userDetails)
   const { loading, error, user } = userDetails

   const userUpdate = useSelector((state) => state.userUpdate)
   const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = userUpdate


   console.log("user: ", user)


   useEffect(() => {
      if (successUpdate) {
         dispatch({ type: USER_UPDATE_RESET })
         navigateLog('/admin/userlist')

      } else {
         if (!user.name || user._id !== userId) {
            dispatch(getUserDetails(userId))
         } else {
            setName(user.name)
            setEmail(user.email)
            setIsAdmin(user.isAdmin)
         }
      }

   }, [user, userId, successUpdate, navigateLog, dispatch])



   const submitHandler = (e) => {
      e.preventDefault()
      dispatch(updateUser({ _id: user._id, name, email, isAdmin }))
   }

   return (
      <>
         <Link to='/admin/userlist' className='btn btn-light my-3'>
            Go Back
         </Link>
         <FormContainer>
            <h1>Edit user</h1>
            {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant='danger'> {errorUpdate} </Message>}
            {loading ? <Loader /> : error ? <Message variant='danger'> {error} </Message>
               : (
                  <Form onSubmit={submitHandler}>

                     <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                     </Form.Group>

                     <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                     </Form.Group>

                     <Form.Group controlId='isAdmin'>
                        <Form.Check type='checkbox' label='Is Admin' checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)}></Form.Check>
                     </Form.Group>

                     <Button type='submit' variant='primary'>Update</Button>
                  </Form>
               )}
         </FormContainer >
      </>

   )
}

export default UserEditScreen