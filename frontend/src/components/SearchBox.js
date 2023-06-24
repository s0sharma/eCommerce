import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, FormControl } from 'react-bootstrap'

const SearchBox = () => {
   let navigateLog = useNavigate()

   const [keyword, setKeyword] = useState('')
   const submitHandler = (e) => {
      e.preventDefault()
      if (keyword.trim()) {
         navigateLog(`/search/${keyword}`)
      } else {
         navigateLog('/')
      }
   }

   return (
      <Form onSubmit={submitHandler} className='d-flex' >
         <FormControl type='text' name='q' onChange={(e) => setKeyword(e.target.value)} placeholder='Search Product...'
            className='mr-sm-2 ml-sm-5' style={{ 'marginRight': '15px' }}
         ></FormControl>
         <Button type='submit' variant='outline-success' className='p-2'> Search </Button>
      </Form>
   )
}

export default SearchBox