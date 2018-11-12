import React from "react";
import "./style.css";

export default function index(props) {
    const { value, color, onClick } = props;
    return (
    <React.Fragment>
   <button className="button" style={ { background:color } } onClick={ onClick }>
      <span>{value}</span>
      </button>
    </React.Fragment>
  );
}
