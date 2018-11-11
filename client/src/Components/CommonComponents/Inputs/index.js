import React from "react";
import propTypes from 'prop-types';

import "./style.css";

export default function index(props){
  const { value, type, label, name, width, placeholder } = props;
  return (
     <React.Fragment>
         <label  className="common-label">
             {label}
             <input
                 name={ name }
                 type={ type }
                 style={ { width: width } }
                 placeholder = {'placeholder'}
                 className="common-input"
                 value={ value }
             />
         </label>
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
