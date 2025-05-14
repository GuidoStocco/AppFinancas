import React from 'react'
// import { StatusBar } from 'expo-status-bar';
import { StatusBar} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider} from './src/contexts/auth';

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#f4f0ff', flex: 1}}>
    <NavigationContainer>
      <AuthProvider>
      <StatusBar barStyle='dark-content'/>
      <Routes/>
      </AuthProvider>
    </NavigationContainer>
    </SafeAreaView>
  );
}

