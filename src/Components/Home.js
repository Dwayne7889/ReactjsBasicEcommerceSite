import React,{Component} from 'react';
import Slideshow from './SlideShow';
import {Products} from './Products/Products';
import FadeIn from 'react-fade-in';


export class Home extends Component{

    render(){
        return(
        
           <div className="home">
            <div className="home__container">
                <Slideshow />
            </div>
            <FadeIn>
            <div className="home__container">
          <Products/>
            </div>
            </FadeIn>
        </div>
      
        )
    }
}