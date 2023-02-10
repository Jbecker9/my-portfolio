import React from "react";
import Languages from "./Body/Languages";
import NavButtons from "./Body/NavButtons";
import Summary from "./Body/Summary";
import Title from "./Body/Title";
import "../styles/App.css"

function Body(){

    return(
        <div className="Body-bodyDiv">
            <Title />
            <Summary />
            <NavButtons />
        </div>
    )
}

export default Body