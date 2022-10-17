import React from "react";

import 
{ CastContainer, 
Path } from "./style";

const Cast = (props) => {
    return (
        <CastContainer key ={props.id}>
        <Path src={props.path} alt=""/>
        <div>
            <h4>{props.name}</h4>
            <p>{props.character}</p>
        </div>
        </CastContainer>
    )

}

export default Cast