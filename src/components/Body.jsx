import React, { useState } from "react";
import NavButtons from "./Body/NavButtons";
import BodyContents from "../components/Body/BodyContents/BodyContent"
import "../styles/App.css"

function Body(){
    const [navNumber, setNavNumber] = useState(0)

    function loopBodyContents(event){
        console.log(event.target.value)
        // setNavNumber(navNumber + 1)
        // if (navNumber >= 3){
        //     setNavNumber(0)
        // } else if (navNumber <= -1){
        //     setNavNumber(2)
        // }
    }

    return(
        <div className="Body-bodyDiv">
            <BodyContents navNumber={navNumber} />
            <NavButtons setNavNumber={setNavNumber} loopBodyContents={loopBodyContents} />
        </div>
    )
}

export default Body