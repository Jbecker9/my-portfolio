import React from "react";
import "../../styles/NavButtons.css"

function NavButtons({ loopBodyContents }){

    return(
        <div className="NavButtons-div" >
            <div className="Arrow-Left-Button" onClick={(e)=>loopBodyContents(e)}>
                <i className="fa-solid fa-arrow-left fa-4x" ></i>
            </div>
            <div className="Arrow-Right-Button" >
                <i className="fa-solid fa-arrow-right fa-4x" onClick={(e)=>loopBodyContents(e)}></i>
            </div>
        </div>
    )
}

export default NavButtons