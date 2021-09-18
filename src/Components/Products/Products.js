  
import React,{Component} from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import "../styles/Products.css";


export class Products extends Component{

    constructor(props){
        super(props);
        this.state={prods:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Products/GetAll')
        .then(response=>response.json())
        .then(data=>{
            this.setState({prods:data});
            console.log(data);
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
    <h3>{prod.productName}</h3>
    <h5 className="product__price text-info">
        <strong>{prod.productPrice}</strong>
    </h5>
</div>
<img src={prod.productImage}  alt="" title={prod.productImageName} />
</div>
     
                  )}
            </div>
        )
    }
}