import React from 'react';
import {Platform, View, Text} from 'react-native';

import {
    Background,
    Container, 
    Logo, 
    AreaInput, 
    Input,
    SubmitButton,
    SubmitText,
} from '../SignIn/styles';

export default function SignUp(){
    return(
        <Background>
            <Container
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enable
            >
                <AreaInput>
                    <Input placeholder='Seu nome'/>
                </AreaInput>

                <AreaInput>
                    <Input placeholder='Seu email'/>
                </AreaInput>

                <AreaInput>
                    <Input placeholder='Sua senha'/>
                </AreaInput>

                <SubmitButton>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>
            </Container>
        </Background>
    );
}