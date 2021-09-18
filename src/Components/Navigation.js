import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Container, Image} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="white" className="shadow-sm p-3 bg-white rounded" expand="lg">
                  <Container>
                <Navbar.Brand to="/"><Image src='JustShoesLogo.png' width='200px' ></Image></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <NavLink className="d-inline p-2 text-dark" to="/">
                    Home
                </NavLink>
                <NavLink className="d-inline p-2 text-dark" to="/products">
                    Products
                </NavLink>

                </Nav>
        
                </Navbar.Collapse>
                <Nav>
              
              <NavLink className="d-inline p-2 text-info" to="/register">Register</NavLink>
              <NavLink className="d-inline p-2 text-primary" to="/signin">Signin</NavLink>
            </Nav>
                </Container>

            </Navbar>
        )
    }
}