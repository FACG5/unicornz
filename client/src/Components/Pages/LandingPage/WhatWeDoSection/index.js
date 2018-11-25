import React from 'react';
import whatpic1 from './image/download (1).jpeg'
import whatpic2 from './image/download (2).jpeg'
import whatpic3 from './image/gdtech17-202.jpg'

import './style.css'


class WhatWeDoComp extends React.Component {

render(){
 return (

    <div className = "what-section">
        <div className="what-bacground">
        <div className="what-content">
        <div className = "mato2">
            <p>What We Do</p>
            <i class="fas fa-star top-left"></i>
            <i class="fas fa-star top-right"></i>
            <i class="fas fa-star bottom-left"></i>
            <i class="fas fa-star bottom-right"></i>
        </div>
        <p className="what-p">
          Unicornz helps girls achieve the creative confidence to be
          the very best they can, in whatever field they choose, with
          a view to becoming the future leaders and innovators of
          business and the world they want to shape.</p>
        <div className="what-category">
            <div className="what-images">
                <img src={whatpic1} alt="girl pic" className="what-img"/> 
                <p>Unicornz helps girls achieve the creative confidence to be
          the very best they can.</p>  
            </div>
            <div className="what-images">
                <img src={whatpic2} alt="girl pic" className="what-img"/> 
                <p>Unicornz helps girls achieve the creative confidence to be
          the very best they can.</p>  
            </div>
            <div className="what-images">
                <img src={whatpic3} alt="girl pic" className="what-img"/> 
                <p>Unicornz helps girls achieve the creative confidence to be
          the very best they can</p>  
            </div>
        </div>
        </div>
        </div>
    </div>


 );
}
}

export default WhatWeDoComp