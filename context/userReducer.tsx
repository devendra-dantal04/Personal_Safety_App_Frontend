import { createContext, useContext, useReducer, useState } from "react";

const userContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: (value: boolean) => {},
    user: null,
    setUser: (value: any) => {}
});

export const UserContextProvider = ({children}: {children: React.ReactNode}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false) ;
    const [user, setUser] = useState(null);


    return <userContext.Provider value={{isLoggedIn, setIsLoggedIn, user, setUser}}>
        {children}
    </userContext.Provider>
}

export const useUserSelector = () => useContext(userContext);