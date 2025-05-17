import { useNavigation } from '@react-navigation/native';
import React, {createContext, useState}  from 'react';
import api from '../services/index';

export const AuthContext = createContext({});


export function AuthProvider({children}){

    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    const navigation = useNavigation()

    async function signUp(nome, email, password){
        setLoadingAuth(true)
        try {
            const response = await api.post('./users', {
                name: nome,
                password: password,
                email: email
            })

            setLoadingAuth(false)
            navigation.goBack();
        } catch (error) {
            console.log('Aconteceu algo ' + error)
            setLoadingAuth(false)
        }
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, signUp, loadingAuth}}>
            {children}
        </AuthContext.Provider>
    );
}