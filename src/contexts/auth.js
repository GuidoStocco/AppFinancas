import { useNavigation } from '@react-navigation/native';
import React, {createContext, useState}  from 'react';
import api from '../services/index';

export const AuthContext = createContext({});


export function AuthProvider({children}){

    const [user, setUser] = useState({
        nome: 'Guido'
    })

    const navigation = useNavigation()

    async function signUp(nome, email, password){
        try {
            const response = await api.post('./users', {
                name: nome,
                password: password,
                email: email
            })
            navigation.goBack();
        } catch (error) {
            console.log('Aconteceu algo ' + error)
        }
    }

    return(
        <AuthContext.Provider value={{user, signUp}}>
            {children}
        </AuthContext.Provider>
    );
}