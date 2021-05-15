import React from "react"

State= {color: "red"}


function Red() {

    if(State)
    return(
        <button onClick = "Color">{State.color}</button>
    )

}

export default Red;