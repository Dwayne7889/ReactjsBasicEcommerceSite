// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './Components/Home';
import {Product} from './Components/Products/Item/Product';
import {ProductDetails} from './Components/Products/Item/ProductDetails'
import {Register} from './Components/Admin/Register';
import Signin from './Components/Admin/Signin';
import {Cart} from './Components/Shopping/Cart';
import {Navigation} from './Components/Navigation';
import {NavigationLoggedIn} from './Components/NavigationLoggedIn';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Loading from './Components/Loader/Loading';


function App() {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  })
  return (
    
    <BrowserRouter>
    {isLoading===true?
      <Loading/>:
    <div className="container">       
    {(user !=="")?(
     <NavigationLoggedIn/>
     ):(
      <Navigation/>
     )} 
     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/product' component={Product}/>
       <Route path='/ProductDetails' component={ProductDetails}/> 
       <Route path='/cart' component={Cart}/> 
       <Route path='/register' component={Register}/> 
       <Route path='/signin' component={() => <Signin signIn={user => setUser(user)}/>}/> 
     </Switch>
    </div>
}
    </BrowserRouter> 
  );
 
}

export default App;