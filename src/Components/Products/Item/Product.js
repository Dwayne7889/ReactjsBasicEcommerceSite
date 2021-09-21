import React,{Component} from 'react';
import {ProductDetails} from './ProductDetails';
import "./styles/Product.css";
import FadeIn from 'react-fade-in';



export class Product extends Component{

    constructor(props){
        super(props);
        this.state={prods:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Products/GetAll')
        .then(response=>response.json())
        .then(data=>{
            this.setState({prods:data});
            // console.log(data);
        });
    }
    //Loads Products
    componentDidMount(){
        this.refreshList();
    }
    render(){
        const {prods} = this.state;
 
    
        return(
          
            <div >
                  {prods.map(prod=>
                  

<div className="product mb-3 mt-3 p-3" id={prod.id}>
<div className="product__info">
    <h2>{prod.productName}</h2>
    <h4 className="product__price text-info">
        <strong>{prod.productPrice}</strong>
    </h4>
   
</div>
<div className="row">
<div className="col-md-6 text-center">
<FadeIn>
<img src={prod.productImage}  alt="" title={prod.productImageName} /> 
</FadeIn>
</div>

<div className="col-md-6">
<FadeIn>
<ProductDetails productId={prod.id} productName={prod.productName} productPrice={prod.productPrice}  ></ProductDetails>
</FadeIn>
</div>

</div>
</div>
     
                  )}
            </div>
          
        )
    }
}