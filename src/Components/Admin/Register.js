import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import "../styles/Register.css";
import axios from 'axios';

export class Register extends Component {

  render() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      var EmailAddress = data.get('email');
      var password = data.get('password');
      var active = 0;

      fetch(process.env.REACT_APP_API + 'Users/Check/' + EmailAddress)
        .then(response => response.ok)
        .then(data => {
     //email duplication check
      if (data === true) {
        alert("Email already exists");
      }
      else {
        //Saves to DB
        this.setState({EmailAddress, password,active});
        // console.log(this.state);
        axios.post(process.env.REACT_APP_API + 'Users/Create',this.state)
        .then(response => {
          // console.log(response);
          alert("Please check your email address for Welcome Email");
          //clears inputs
          document.getElementById("Regform").reset();
      
        })
        .catch(err => {
          console.log(err);
        });
      }
    });
  }
    return (

      <form id="Regform" onSubmit={handleSubmit}>
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