import React from "react";
import Memoroutes from "./Memoroutes";
import ProjectCarShare from "./ProjectCarShare";
import EzMetar from "./EzMetar";

function Projects(){

    return(
        <div className="Projects-Container">
            <Memoroutes />
            <ProjectCarShare />
            <EzMetar />
        </div>
    )
}

export default Projects