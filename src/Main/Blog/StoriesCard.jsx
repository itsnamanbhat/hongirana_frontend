import React from "react";
import "./StoriesCard.css"

const Card=(props)=>{
return(<div className="main_c">
    <div className="image_c"></div>
    <div className="description_c">
        <h3>Topic Name</h3>
        <p>Topic description</p>
    </div>
    <button>view Full Post</button>
</div>)
}

export default Card;