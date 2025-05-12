import React from 'react';
import {View, Text} from 'react-native';
import AuthRoutes from './auth.routes';

export default function Routes(){

    let loading = false;
    let signed = false;

    return(
        signed ? <View></View> : <AuthRoutes/>
    );
}