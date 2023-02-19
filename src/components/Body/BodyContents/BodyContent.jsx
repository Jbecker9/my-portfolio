import React from "react";
import Title from "../Title";
import Projects from "./Projects";

function BodyContents({ navNumber }){
    

    switch(navNumber){
        case 0:
            <Title />
            break;
        case 1:
            <Projects />
            break;
    }
}

export default BodyContents