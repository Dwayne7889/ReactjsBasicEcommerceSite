import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import "../styles/Signin.css";
import { useHistory } from 'react-router';
import UserSessions from '../UserSessions';


function Signin(props) {
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    var EmailAddress = data.get('email');
    var password = data.get('password');

    fetch(process.env.REACT_APP_API + 'Users/Check/' + EmailAddress)
      .then(response => response.ok)
      .then(data => {
   //email duplication check
    if (data === false) {
      alert("Email not found");
    }
    else {
      fetch(process.env.REACT_APP_API + 'Users/CheckSignin/' + EmailAddress+'/'+ password)
      .then(response => {
if(response.ok){
UserSessions.setEmail(EmailAddress);
  props.signIn(EmailAddress);
  return history.push('/')   
}
else{
alert("Incorrect Email or Password!");
}
      })
      .catch(err => {
        console.log(err);
      });
    }
  });
}

  return (
    <div>
             <form onSubmit={handleSubmit}>    
              <Card className="text-center mt-3 shadow-sm">
          <Card.Header className="bg-primary text-white h5 p-3">Signin Form</Card.Header>
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
  <Button size="small" className="btn btn-primary p-2 mr-3" type="submit" >Signin</Button>
  </div>
          </Card.Body>
          <Card.Footer className="bg-primary text-white p-3">Don't have an account?&nbsp;<a href="./Register" class="text-white h6">Register</a></Card.Footer>
        </Card>
        </form>
 
    </div>
  )
}

export default Signin
