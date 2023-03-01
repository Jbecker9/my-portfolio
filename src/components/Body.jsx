import React, { useState } from "react";
import NavButtons from "./Body/NavButtons";
import BodyContents from "../components/Body/BodyContents/BodyContent"
import "../styles/App.css"

function Body(){
    const [navNumber, setNavNumber] = useState(0)

    function loopBodyContents(event){
        console.log(navNumber)
        switch (event.target.parentNode.id){
            case "Add":
                if (navNumber > 0){
                    setNavNumber(0)
                } else {
                    setNavNumber(navNumber + 1)
                }
            break;
            case "Minus":
                if (navNumber < 1){
                    setNavNumber(1)
                } else {
                    setNavNumber(navNumber - 1)
                }
            break;
        }
    }

    return(
        <div className="Body-bodyDiv">
            <BodyContents navNumber={navNumber} />
            <NavButtons setNavNumber={setNavNumber} loopBodyContents={loopBodyContents} />
        </div>
    )
}

export default Body