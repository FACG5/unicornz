import React from "react";
import checked from './images/checked.png'

import "./style.css";

export default ({prevJobs}) =>{
return(
  <div className="prevJobs">
  <h2>Previuos jobs</h2>
{
prevJobs && prevJobs.map((val,index)=>{
  return(
    <div className="done-jobs">
    <img src={checked} alt="jobs"/>{' '}
  <span>
  {val}
  </span>
  </div>
)
})
}
</div>
)


}
