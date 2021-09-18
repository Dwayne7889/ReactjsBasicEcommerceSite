import React,{Component} from 'react';
import Slideshow from './SlideShow';
import {Products} from './Products/Products';


export class Home extends Component{

    render(){
        return(
           <div className="home">
            <div className="home__container">
                <Slideshow />
            </div>

            <div className="home__container">
          <Products/>
            </div>
        </div>
        )
    }
}