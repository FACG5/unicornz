import React from "react";
import Input from '../../../CommonComponents/Inputs';
import Button from '../../../CommonComponents/Button';

import "./style.css";

export default  ({action}) => {

return(
  <div className='find'>
  <h2>Find Job</h2>
<Input  type={'text'} label={'Post code'} name={'post-code'} width={'150px'} placeholder={'post code'} />

<label>Subject  :
   <select>
      <option selected>Marie Clare</option>
      <option >Ahmad</option>
      <option >Marwan</option>
   </select> </label>

   <Button className='button' value={'Search'} color={'#5D6A8B'} onClick={action}/>
   </div>
)

}
