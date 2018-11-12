import React from "react";
import checked from './images/checked.png'

import "./style.css";

const  index = (props)=>{
const {prevJobs} = props;
return(
  <React.Fragment>
  <div className="prevJobs" key={index}>
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
  </React.Fragment>
)


}
export default index
