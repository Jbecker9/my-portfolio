import React, { useState } from "react";

const NavigationContext = React.createContext()

function NavigationProvider({ children }){
    const [navNumber, setNavNumber] = useState(0)

    return <NavigationContext.Provider value={{navNumber, setNavNumber}} >{children}</NavigationContext.Provider>
};

export {NavigationContext, NavigationProvider}