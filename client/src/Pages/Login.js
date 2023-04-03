import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container style={{height : "100vh",justifyContent : "center", display : "flex"}}>
      <Form className='d-flex w-50 m-auto justify-content-center'>
        <Container>
        <p className='text-center display-3'>Login</p>
        <Form.Group className='m-auto col-8'>
          <Form.Control className='mb-3' type='text' placeholder='Name'></Form.Control>
        </Form.Group>
        <Form.Group className='m-auto col-8'>
          <Form.Control className='mb-3' type='password' placeholder='password'></Form.Control>
        </Form.Group>
        <Form.Group className='m-auto text-center d-flex justify-content-center'>
        <Button variant='primary' className='m-1 col-6 p-2'>Log In</Button>
        </Form.Group>
        <p className='text-center' style={{color : "red"}}>Error</p>
        <p className='text-center '>Don't have an account? <Link to='/Register'>Register</Link></p>
        </Container>
      </Form>
    </Container>
  )
}

export default Login
