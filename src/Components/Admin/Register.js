import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import "../styles/Register.css";

export class Register extends Component {

  constructor(props) {
    super(props);
    this.state = { email: [], password: [], checkEmail: [] }
  }

  render() {

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });

      var email = data.get('email');
      var password = data.get('password');

      fetch(process.env.REACT_APP_API + 'Users/Get/' + email)
        .then(response => response.json())
        .then(data => {
          this.setState({ checkEmail: data });
          console.log("Value: " + data);
        });
      const { checkEmail } = this.state;

      console.log('Check: ' + checkEmail);
      //email duplication check
      if (checkEmail.length > 0) {
        alert("Email already exists");
      }
      else {

      }
    }

    return (

      <form onSubmit={handleSubmit}>
        <Card className="text-center mt-3 shadow-sm">
          <Card.Header className="bg-primary text-white h5 p-3">Registration Form</Card.Header>
          <Card.Body>
            <div className="col-md-12">
              <FormControl className="text">
                <InputLabel htmlFor="EmailAddress">Email address</InputLabel>
                <Input id="EmailAddress" aria-describedby="my-helper-text" type="email" name="email" required />
              </FormControl>
            </div>
            <div class="col-md-12">
              <FormControl className="text mt-3">
                <InputLabel htmlFor="Password">Password</InputLabel>
                <Input id="Password" aria-describedby="my-helper-text" type="password" name="password" required />
              </FormControl>
            </div>
            <div class="col-md-12 text-right mt-4">
              <Button size="small" className="btn btn-primary p-2 mr-3" type="submit" >Register</Button>
            </div>
          </Card.Body>
          <Card.Footer className="bg-primary text-white p-3">Already have an account?&nbsp;<a href="./Signin" class="text-white h6">Signin</a></Card.Footer>
        </Card>
      </form>

    )
  }
}