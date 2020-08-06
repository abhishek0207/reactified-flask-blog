import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from '../logo.svg';
const Layout : React.FC<{component: React.ReactNode}> = (props) => {

    const component = props.component
    return(
        <Container>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
        <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
        />{' '}
        Flask Blog
        </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
        </Nav>
    </Navbar>
       {component}

        </Container>
    )
}

export default Layout