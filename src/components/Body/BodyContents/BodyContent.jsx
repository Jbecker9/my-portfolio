import React from "react";
import Title from "../Title";
import Projects from "./Projects/Projects";
import Resume from "./Resume";

function BodyContents({ navNumber }){
    // console.log(navNumber)

        switch(navNumber){
            case 0:
                return <Title />
                break;
            case 1:
                return <Projects />
                break;
            case 2:
                return <Resume />
                break;
    }
}

export default BodyContents