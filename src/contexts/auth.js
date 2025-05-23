import { useNavigation } from '@react-navigation/native';
import React, {createContext, useState, useEffect}  from 'react';
import api from '../services/index';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});


export function AuthProvider({children}){

    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true)

    const navigation = useNavigation()

    useEffect(() => {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('@finToken')

            if(storageUser){
                const response = api.get('/me', {
                    headers: {
                        'Authorization': `Bearer ${storageUser}`
                    }
                })
                .catch(() => {
                    setUser(null);
                })
                api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
                setUser(response.data);
                setLoading(false)
            }
            setLoading(false)
        }

        loadStorage()
    }, [])

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

            await AsyncStorage.setItem('@finToken', token)
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

    async function signOut(){
        await AsyncStorage.clear()
        .then(() => {
            setUser(null);
        })
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, signUp, loadingAuth, signIn, loading, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}