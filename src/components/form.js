import React from "react";
import Experience from "./experience.js";
import Personal from "./personal.js";

export default function Form(props) {
  

    return(
        <div id="form">
            <Personal cvTemplate={props.cvTemplate} handleChange={props.handleChange}/>
            <Experience  cvTemplate={props.cvTemplate} handleChange={props.handleChange}/>
        
        </div>
    )
}

