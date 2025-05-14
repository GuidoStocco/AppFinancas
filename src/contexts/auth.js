import React, {createContext, useState}  from 'react';

export const AuthContext = createContext({});


export function AuthProvider({children}){

    const [user, setUser] = useState({
        nome: 'Guido'
    })

    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    );
}