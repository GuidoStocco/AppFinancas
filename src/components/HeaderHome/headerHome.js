import React from 'react';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {Container,
    Title,
    Button
} from './stylesHome';


export default function HeaderHome({title}){

    const navigation = useNavigation();

    return(
        <Container>
            <Button onPress={() => navigation.openDrawer()}>
                <Feather name='menu' size={35} color='#121212'/>
            </Button>

            {title && (
                <Title>{title}</Title>
            )}
        </Container>
    );
}