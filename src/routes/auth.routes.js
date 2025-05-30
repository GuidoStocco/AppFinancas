import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp/index';
import { Header } from '../components/header';



const AuthStack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
            name='SignIn'
            component={SignIn}
            options={{
                headerShown: false
            }}
            />
            
            <AuthStack.Screen
            name='SignUp'
            component={SignUp}
            options={{
                header: () => <Header/>
                
            }}
            />
        </AuthStack.Navigator>
    );
}