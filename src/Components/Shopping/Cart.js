import React,{Component} from 'react';
import { Button } from 'react-bootstrap';
import UserSessions from '../UserSessions';
import axios from 'axios';
import FadeIn from 'react-fade-in';

export class Cart extends Component{

    constructor(props){
        super(props);
        this.state={
            prods:[],
        email:UserSessions.getEmail() ,
        text:"" ,
        textBtn:"Process Order",
        table:"d-none"     
        }
    }
    refreshList(){
        fetch(process.env.REACT_APP_API+'Cart/Get/'+this.state.email)
        .then(response=>response.json())
        .then(data=>{
            this.setState({prods:data});
            this.setState({table:"d-inline"});
        }).catch(err => {
this.setState({text:"No Items In Cart"});
this.setState({table:"d-none"});
            console.log(err);
          });
    }
    
    //Loads Products 
    componentDidMount(){
        this.refreshList();
    }

   
     RemoveItem = (productId) =>{
        axios.delete(process.env.REACT_APP_API + 'Cart/Delete/'+productId)
        .then(response => {
            // console.log(response);
            this.refreshList();
        })
        .catch(err => {
          console.log(err);
        });
      }


      
      changeText = (textBtn) => {
        this.setState({textBtn: !this.state.textBtn})
      }
    

    render(){
      let textBtn;
    
      if(textBtn !=="Processing...Please Wait..."){
        textBtn = this.state.textBtn ? "Process Order": "Processing...Please Wait..." ;
      }
        const {prods} = this.state;
      var total = prods.reduce((a,v) =>  a = a + v.productPrice , 0 );
      //used by remove function
      // eslint-disable-next-line no-unused-vars
      let productId;

      const handleSubmit = (event) => {
        event.preventDefault();
     const CartItems = {
      UserEmail:UserSessions.getEmail(),
      ProductTotal:total
        };
          // console.log(this.state);
          axios.post(process.env.REACT_APP_API + 'Purchased/Create',CartItems)
          .then(response => {
          alert("CheckOut Successful, Email Sent!");
          this.setState({textBtn: "Process Order"});
          })
          .catch(err => {
            console.log(err);
          });
    }



        return(
            <div class="container">
                <form id="CheckOut" onSubmit={handleSubmit}>
                <label class="h5">{this.state.text}</label>
                <div class={ this.state.table}>
              <FadeIn>
                <table class="table table-bordered">
                <thead class="BlueGradBackground p-2">
        <tr>
        <th>#</th>
        <th>Product Name</th>
        <th>Product Quantity</th>
        <th>Product Price</th>
        </tr>
        </thead>
                  {prods.map(prod=>
  
        <tr>
         <td>
        <Button className="btn btn-sm btn-dark" onClick={ () => { this.RemoveItem(productId=prod.id)}}>Remove Item</Button>
        </td> 
        <td>{prod.productName}</td>
        <td>{prod.productQuantity}</td>
        <td class="text-info"><strong>R {prod.productPrice}</strong></td>
        </tr>
                  )}
                  </table>
                  </FadeIn>
               
                  <div class="row">
                  <div class="col-md-6">
                
                  </div>
                  <div class="col-md-6 text-right">
                  <h6>Total:</h6><h4 class="text-info">R {total}</h4> 
                  <br/>
                  <Button className="btn-success"  onClick={ () => { this.changeText("Processing...Please Wait...")}} type="submit" >{textBtn}</Button>
                  </div>
                  </div>
                  </div>
                  </form>
            </div>
        )
    }
}