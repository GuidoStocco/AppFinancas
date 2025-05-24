import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home/index';

const AuthDrawer = createDrawerNavigator();


export default function AppRoutes(){
    return(
        <AuthDrawer.Navigator
            screenOptions={{
                headerShown: false,

                drawerStyle:{
                    backgroundColor: '#fff',
                    paddingTop: 20
                },
                drawerActiveBackgroundColor: '#3b3dbf',
                drawerActiveTintColor: '#fff',

                drawerInactiveBackgroundColor: '#f0f2ff',
                drawerInactiveTintColor: '#121212'
            }}
        >
            <AuthDrawer.Screen
            name='Home'
            component={Home}
            />
        </AuthDrawer.Navigator>
    );
}
