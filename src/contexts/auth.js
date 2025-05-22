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

    async function signIn(email, password){
        setLoadingAuth(true)

        try {
            const response = await api.post('/login', {
                email: email,
                password: password
            })

            const {id, name, token} = response.data;

            const data = {
                id,
                name,
                token,
                email
            };

            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            setUser({
                id,
                name,
                email
            })

            setLoadingAuth(false)

        } catch (error) {
            console.log('Error ao logar: ' + error)
            setLoadingAuth(false)
        }
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, signUp, loadingAuth, signIn}}>
            {children}
        </AuthContext.Provider>
    );
}