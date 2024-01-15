import React from "react";
import "./Card.css"
import Button from "./Button";

const Card=(props)=>{
return(<div className={`main_c ${props.mainClass}`}>
    <div className={`image_c ${props.imageClass}`}>{props.image}</div>
    <div className={`description_c ${props.descriptionClass}`}>
        <h3>{props.topic}</h3>
        <p>{props.description}</p>
    </div>
   <Button className={props.buttonClass}>{props.buttonType}</Button>
</div>)
}

export default Card;