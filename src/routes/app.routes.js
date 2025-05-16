import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home/index';

const AuthDrawer = createDrawerNavigator();


export default function AppRoutes(){
    return(
        <AuthDrawer.Navigator>
            <AuthDrawer.Screen
            name='Home'
            component={Home}
            />
        </AuthDrawer.Navigator>
    );
}
