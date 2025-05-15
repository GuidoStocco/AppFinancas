import React from 'react';
import { SafeAreaView} from 'react-native-safe-area-context';
import {Feather} from '@expo/vector-icons';
import {Text, TouchableOpacity} from 'react-native'

import { useNavigation } from '@react-navigation/native';

export function Header(){

    const navigation = useNavigation()

    return(
        <SafeAreaView style={{
            width: '100%', backgroundColor: '#3b3dbf', height: 50, flexDirection: 'row', gap: 6, alignItems: 'center',
            paddingLeft: 10}}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <Feather name='arrow-left' color='#fff' size={20} />
                <Text style={{color: '#fff', fontSize: 20 }}>Voltar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}