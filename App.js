
import 'react-native-gesture-handler';
import React from 'react'
// import { StatusBar } from 'expo-status-bar';
import { StatusBar} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider} from './src/contexts/auth';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
    <StatusBar barStyle='dark-content' backgroundColor='#000' translucent/>
    <NavigationContainer>
      <AuthProvider>
      <Routes/>
      </AuthProvider>
    </NavigationContainer>
    </SafeAreaView>
  );
}

