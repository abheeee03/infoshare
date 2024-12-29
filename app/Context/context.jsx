import React, { createContext, useState } from "react";
import VCard from 'react-native-vcards';


export const AppContext = createContext();


export const AppProvider = ({children})=>{


    const userContact = new VCard();



    const [userData, setuserData] = useState({});
    const updateUser = (data)=>{
        setuserData(data);
        userContact.firstName = data.Name;
        userContact.phone = data.contactNum;
    }

    return(
        <AppContext.Provider value={{userData, updateUser, userContact}}>
            {children}
        </AppContext.Provider>
    )

}