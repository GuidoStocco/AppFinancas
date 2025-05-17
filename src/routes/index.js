import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { AuthContext } from '../contexts/auth';

export default function Routes(){
    const {signed} = useContext(AuthContext)

    let loading = false;
    

    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    );
}