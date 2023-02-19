import React from "react";
import "../../styles/NavButtons.css"

function NavButtons({ loopBodyContents }){

    return(
        <div className="NavButtons-div" >
            <div className="Arrow-Left-Button" id="Minus">
                <i className="fa-solid fa-arrow-left fa-4x" onClick={loopBodyContents}></i>
            </div>
            <div className="Arrow-Right-Button" id="Add">
                <i className="fa-solid fa-arrow-right fa-4x" onClick={loopBodyContents}></i>
            </div>
        </div>
    )
}

export default NavButtons