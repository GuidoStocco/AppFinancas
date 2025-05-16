import React, {useContext, useState} from 'react';
import {Platform, ActivityIndicator} from 'react-native';

import {
    Background,
    Container, 
    Logo, 
    AreaInput, 
    Input,
    SubmitButton,
    SubmitText,
} from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {signUp, loadingAuth} = useContext(AuthContext);
    

    function handleSignUp(){

        if(nome === '' || email === '' || password === '') return

        signUp(nome, email, password)
    }

    return(
        <Background>
            <Container
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enable
            >
                <AreaInput>
                    <Input placeholder='Seu nome' 
                    value={nome} 
                    onChangeText={(text) => setNome(text)}/>
                </AreaInput>

                <AreaInput>
                    <Input placeholder='Seu email'
                    value={email} 
                    onChangeText={(text) => setEmail(text)}/>
                </AreaInput>

                <AreaInput>
                    <Input placeholder='Sua senha'
                    value={password} 
                    onChangeText={(text) => setPassword(text)} 
                    secureTextEntry={true}/>
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color='#fff'/>
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }                 
                </SubmitButton>
            </Container>
        </Background>
    );
}