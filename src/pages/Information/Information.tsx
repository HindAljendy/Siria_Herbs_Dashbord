import React from 'react'
import { Spinner } from 'react-bootstrap'

const Information = () => {
  
  return (
    <div className='ne-information'>
        <h1>Loading .....</h1>
        <Spinner animation="border" role="status" size="sm" variant='primary' />
    </div>
  )
}

export default Information