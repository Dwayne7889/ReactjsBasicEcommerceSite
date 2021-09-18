// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './Components/Home';
import {Products} from './Components/Products/Products';
import {Register} from './Components/Admin/Register';
import {Signin} from './Components/Admin/Signin';
import {Navigation} from './Components/Navigation';

import {BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <Navigation/>

     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/products' component={Products}/>
       <Route path='/register' component={Register}/> 
       <Route path='/signin' component={Signin}/> 
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;