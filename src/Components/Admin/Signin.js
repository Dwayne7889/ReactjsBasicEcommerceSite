import React,{Component} from 'react';
import { Card, CardContent, CardActions,Button } from 'react-bootstrap';
import { FormControl, InputLabel,FormHelperText, Input } from '@material-ui/core';
import "../styles/Signin.css";

export class Signin extends Component{

    constructor(props){
        super(props);
        this.state={email:[], password:[]}
    }

    render(){

      const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

        return(
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
 
        )
    }
}