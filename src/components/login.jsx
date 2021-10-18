import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
class Login extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  styles = {
    body:{
      width: "25%",
      margin: "10% 30% 5% 38%" ,
      backgroundColor:"lightGrey",
      padding:"5% 2% 5% 2%",
    },
    h1:{
      color: "grey"
    }
  };
  render() {
    return (
      <div style={this.styles.body}>
        <h1 style={this.styles.h1}>Login Form</h1>
        <br/><br/>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

    );
  }
}

export default Login;


