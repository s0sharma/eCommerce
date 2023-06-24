import React from 'react'
import { Helmet } from 'react-helmet'


const Meta = ({ title, description, keywords }) => {
   return (
      <Helmet>
         <title>{ }</title>
         <meta name='description' content={description}></meta>
         <meta name='keyword' content={keywords}></meta>
      </Helmet>
   )
}

Meta.defaultProps = {
   title: 'Welcome to ourShop',
   description: 'we sell best products at cheap',
   keywords: 'electronics, cheap electronics'
}

export default Meta