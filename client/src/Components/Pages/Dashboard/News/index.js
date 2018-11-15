import React from "react";
import newImg from './images/internet.png'
import paper from './images/news.png'

import "./style.css";

export default ({news}) =>{
return(
  <div className="news">
  <h2>News</h2>
{
news && news.map((val,index)=>{
  return(
    <div className="new-span">
    <img src={newImg} alt="news"/>
  <span >
  {val}
  </span>
  </div>
)
})
}
</div>
)


}
