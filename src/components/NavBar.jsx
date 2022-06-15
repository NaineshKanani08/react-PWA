import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => (
      <div>
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand><Link to='/'>PWA</Link></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
        <Nav.Link><Link to='/about'>About</Link></Nav.Link>
        <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    </div>
  )

export default NavBar;