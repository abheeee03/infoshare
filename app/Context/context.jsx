import React, { createContext, useState } from "react";


export const AppContext = createContext();


export const AppProvider = ({children})=>{

    const [userData, setuserData] = useState({});
    const updateUser = (data)=>{
        setuserData(data);
        console.log(data);
        
    }

    return(
        <AppContext.Provider value={{userData, updateUser}}>
            {children}
        </AppContext.Provider>
    )

}