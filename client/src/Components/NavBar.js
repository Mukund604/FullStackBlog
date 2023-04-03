import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <Navbar>
            <Container>
            <Navbar.Brand><strong><h1>Mukund's Blog</h1></strong></Navbar.Brand>
            <Nav>
                <Nav.Link><Link className='text-decoration-none text-black' to='/Login'>Art</Link></Nav.Link>
                <Nav.Link><Link className='text-decoration-none text-black' to='/Login'>Science</Link></Nav.Link>
                <Nav.Link><Link className='text-decoration-none text-black' to='/Login'>Technology</Link></Nav.Link>
                <Nav.Link><Link className='text-decoration-none text-black' to='/Login'>Cinema</Link></Nav.Link>
                <Nav.Link><Link className='text-decoration-none text-black' to='/Login'>Design</Link></Nav.Link>
                <Nav.Link><Link className='text-decoration-none text-black' to='/Login'>Food</Link></Nav.Link>
                <Nav.Link><Link className='text-decoration-none text-black' to='/Login'>Log In</Link></Nav.Link>
                <Nav.Link className='text-decoration-none text-black'><strong>Mukund</strong></Nav.Link>
                <Nav.Link className='text-decoration-none text-black'><strong>Logout</strong></Nav.Link>
                <Nav.Link><Link className='text-decoration-none text-black' to='/Write'>Write</Link></Nav.Link>

            </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default NavBar
