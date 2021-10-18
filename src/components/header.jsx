import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  styles = {
    img: {
      height: "40px",
      width: "70px"
    },

    navBar: {
      backgroundColor: "#994d00",
      color: "white"

    },

    link: {
      color: "white",
      textDecoration: "none",
    }
  }


  render() {
    return (
      <Navbar style={this.styles.navBar} collapseOnSelect  >
        <Container >
          <Navbar.Brand href="">
            < img src="https://react-builder-burger.firebaseapp.com/static/media/burger-logo.b8503d26.png" alt="Burger builder" style={this.styles.img} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <Nav.Link >
                <Link to="/" style={this.styles.link}> Burger Builder </Link>
              </Nav.Link>

              <Nav.Link >
                {!this.props.isLoggedin ?
                  <Link to="/login" style={this.styles.link}> Login </Link>
                  : <Link to="#" style={this.styles.link} onClick={this.props.logOut}> Log Out </Link>}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
  }
}

export default Header;
