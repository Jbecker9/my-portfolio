import React, { useContext } from "react";
import NavButtons from "./Body/NavButtons";
import BodyContents from "./Body/BodyContents/BodyContents"
import "../styles/App.css"
import { NavigationContext } from "./Context/Navigation";

function Body(){
    const { navNumber, setNavNumber } = useContext(NavigationContext)

    function loopBodyContents(event){
        switch (event.target.id){
            case "Add":
                if (navNumber > 1){
                    setNavNumber(0)
                } else {
                    setNavNumber(navNumber + 1)
                }
            break;
            case "Minus":
                if (navNumber < 1){
                    setNavNumber(2)
                } else {
                    setNavNumber(navNumber - 1)
                }
            break;
        }
    }

    return(
        <div className="Body-bodyDiv">
            <BodyContents />
            <NavButtons loopBodyContents={loopBodyContents} />
        </div>
    )
}

export default Body