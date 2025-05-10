import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor='#f0f4ff'/>
    </View>
  );
}

