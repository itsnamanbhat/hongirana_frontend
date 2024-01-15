import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  if(props.href) {
    return <a style={{color:props.color}}  className="href" href={props.href}>{props.children}</a>;
  }
  if(props.to) {
    return (
      <Link to={props.to} exact={props.exact} className={`link ${props.linkClass}`}>
        {props.children}
      </Link>
    );
  }
  return (
    <button style={{color:props.color, backgroundColor:props.backgroundColor}} className="button" type={props.type} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default Button;
