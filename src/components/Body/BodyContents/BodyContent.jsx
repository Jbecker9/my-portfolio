import React from "react";
import Title from "../Title";
import Projects from "./Projects";

function BodyContents({ navNumber }){
    console.log(navNumber)

        switch(navNumber){
            case 0:
                return <Title />
                break;
            case 1:
                return <Projects />
                break;
    }
}

export default BodyContents