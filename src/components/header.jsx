import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import header from './header.css';
class Header extends Component {

  render() {
    let logoUrl="https://react-builder-burger.firebaseapp.com/static/media/burger-logo.b8503d26.png";
    const {logOut, isLoggedin} = this.props;

    return (
      <Navbar class="navbar" collapseOnSelect >
        <Container >
          <Navbar.Brand href>
            < img className="logo" src={logoUrl} alt="Burger builder"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <Nav.Link >
                <Link className="link"to="/"> Burger Builder </Link>
              </Nav.Link>

              <Nav.Link >
                {!isLoggedin ?
                  <Link className="link"to="/login" > Login </Link>
                  : <Link className="link"to="#" onClick={logOut}> Log Out </Link>}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
  }
}

export default Header;
