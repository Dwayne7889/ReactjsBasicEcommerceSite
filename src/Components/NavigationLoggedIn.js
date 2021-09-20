import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Container, Image} from 'react-bootstrap';

export class NavigationLoggedIn extends Component{
    logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    render(){
      
        return(
          
            <Navbar bg="white" className="shadow-sm p-3 bg-white rounded" expand="lg">
                  <Container>
                <Navbar.Brand><Image src='JustShoesLogo.png' width='150px' ></Image></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <NavLink className="d-inline p-2 text-dark" to="/">
                    Home
                </NavLink>
                <NavLink className="d-inline p-2 text-dark" to="/product">
                    Products
                </NavLink>

                </Nav>
        
                </Navbar.Collapse>
                <Nav>
              
              <NavLink className="d-inline p-2 text-primary" to="/cart">Shopping Cart</NavLink>
              <NavLink className="d-inline p-2 text-primary" to="/" onClick={this.logout}>Signout</NavLink>
            </Nav>
                </Container>

            </Navbar>
            

        )
    }
}