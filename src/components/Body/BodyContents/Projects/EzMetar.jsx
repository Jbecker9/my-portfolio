import React from "react";
import "../../../../styles/Projects.css"
import "../../../../styles/Memoroutes.css"

function EzMetar(){

    return(
        <div className="Projects-Div">
            <a href="https://ezmetar.com/">
                <h2 className="Memoroutes-Title">EzMetar</h2>
            </a>
            <a href="https://github.com/Jbecker9/metar-app">
                <i id="Projects-Github-Link"className="fa-brands fa-square-github fa-inverse fa-2x" />
            </a>
            <img className="Projects-Img" src="https://i.imgur.com/2cuhryp.png"/>
        </div>
)}

export default EzMetar