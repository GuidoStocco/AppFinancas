import React from 'react';
import {View, Text} from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes(){

    let loading = false;
    let signed = false;

    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    );
}