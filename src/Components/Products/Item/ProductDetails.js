import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import UserSessions from '../../../Components/UserSessions';
import axios from 'axios';
import './styles/ProductDetails.css';

export class ProductDetails extends Component {
    constructor(props){
  
        super(props);
        this.state= {
          count:0,
          email:UserSessions.getEmail(),
          text: "Add to Cart",
          btnClass:"btn-warning mt-2"
        }
    
      }
    incrementCount= () => {
        this.setState({
          count:this.state.count+1
        })
      }
      
      decrementCount= () => {
        this.setState({
          count:this.state.count-1
        })
      }

    
      changeText = (text) => {
        this.setState({text: !this.state.text})

        this.setState({btnClass: !this.state.btnClass})
      }
    
    render() {
      
          let { count } =this.state
          let text ="Add to Cart" ;
          let btnClass = "btn-warning mt-2" ;
          if(this.state.count>0 && text !=="Remove from Cart"){
           text = this.state.text ? "Add to Cart": "Remove from Cart" ;
           btnClass =  this.state.btnClass ? "btn-warning mt-2" : "btn-dark mt-2";
          }
          const handleSubmit = (event) => {
            event.preventDefault();
            var EmailAddress = this.state.email;
            var productId = this.props.productId;
            var productName = this.props.productName;
            var productPrice = this.props.productPrice;
            var productQuantity = this.state.count;
            var chars = productPrice.split('R');
            var Price = chars[1] * productQuantity;
          
            if(productQuantity>0){
      
            if(text ==="Remove from Cart"){
          
            const saveToCart = {
            userEmail:EmailAddress,
            productId:productId,
            productName:productName,
            productQuantity:productQuantity,
            productPrice:Price
            };

              axios.post(process.env.REACT_APP_API + 'Cart/Create',saveToCart)
              .then(response => {
                //  console.log(response);
              })
              .catch(err => {
                console.log(err);
              });
            }
        
      else{
        
        fetch(process.env.REACT_APP_API + 'Cart/Get/' + EmailAddress)
        .then(response => response.json())
        .then(data => {
          var itemID;
          data.map(dataID=>
        itemID = dataID.id
          );
     
          axios.delete(process.env.REACT_APP_API + 'Cart/Delete/'+itemID)
          .then(response => {
            //  console.log(response);
          })
          .catch(err => {
            console.log(err);
          });
    

      });
    } 
  }
    
    else{
      alert('Quantity cannot be less then or equal to 0');
     
    }
    
  }
  
        
    
  

        return (
            <div>
           <form id="AddtoCartform" onSubmit={handleSubmit}>
                <Card className="text-center BlueGradBackground float-right formCompCurve">
                <Card.Body>
                    <h5 class="text-white">Quantity</h5>
                   
                    <Button title={"-"} onClick={this.decrementCount} className="btn btn-dark">-</Button>
                    &nbsp;&nbsp;&nbsp; <label for="{ count }">{ count }</label>&nbsp;&nbsp;&nbsp;
                  
            <Button title={"+"} onClick={this.incrementCount} className="btn btn-dark">+</Button>
                <br/>
                    <Button className={btnClass}  onClick={ () => { this.changeText("Item Added")}} type="submit" >{text}</Button>
                    <br/><br/>
                <h5>Description</h5>
                <Card.Text className='text-secondary mt-2 bg-white p-3 formCompCurve'>                           
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                   exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                   sunt in culpa qui officia deserunt mollit anim id est laborum.
                   </Card.Text>
                </Card.Body>
                </Card>
              </form>
               
         </div>
        )
    }
}
