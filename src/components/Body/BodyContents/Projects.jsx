import React from "react";
import "../../../styles/Projects.css"

function Projects(){

    return(
        <div>
            <div className="Projects-Memoroutes-Div">
                <h2 className="Projects-Memoroutes-Title">Memoroutes</h2>
                <a href="https://github.com/Jbecker9/memoroutes">
                    <i id="Projects-Memoroutes-Github-Link"className="fa-brands fa-square-github fa-inverse fa-2x" />
                </a>
                <img className="Projects-Memoroutes-Img" src="https://i.imgur.com/Duk0D7p.png"/>
            </div>
        </div>
    )
}

export default Projects