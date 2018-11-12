import React from "react";
import propTypes from 'prop-types';

import "./style.css";

export default function index(props){
  const { value, type, label, name, width, placeholder } = props;
  return (
     <React.Fragment>
     <div  className="common-input">
         <label  className="common-label">
             {label}:
             <input
                 value={ value }
                 type={ type }
                 name={ name }
                 style={ { width: width } }
                 placeholder = {placeholder}
             />
         </label>
         </div>
     </React.Fragment>
   )
 }

 index.propTypes = {
     value: propTypes.string.isRequired,
     name: propTypes.string.isRequired,
     label: propTypes.string.isRequired,
     type: propTypes.string,
     width: propTypes.string,
 }
