import React, {Component} from 'react';
import Nav from '../Nav.jsx'
import YouTube from 'react-youtube';

class Basic extends Component{
    render(){
        return(
         <div>
             <Nav />
             <div className="video-background">
              <div className="video-foreground">
              
               <iframe src="https://www.youtube.com/embed/cu0uoT21NZI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameBorder="0" allowFullScreen="1"></iframe>
             </div>
            </div>
        </div>
        );
    }

}

export default Basic