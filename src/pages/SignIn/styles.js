import styled from 'styled-components/native';

export const Background = styled.View`
 flex: 1;
 background-color: #f4f0ff;
`;

export const Container = styled.KeyboardAvoidingView`
 flex: 1;
 justify-content: center;
 align-items: center;
`;

export const Logo = styled.Image`
 margin-bottom: 25;
`;

export const AreaInput = styled.View`
flex-direction: row;
`;

export const Input = styled.TextInput`
 width: 90%;
 background-color: #fff;
 font-size: 16px;
 padding: 10px;
 border-radius: 5px;
 color: #121212;
 margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
 width: 90%;
 background-color: #3b3dbf;
 border-radius: 5px;
 margin-bottom: 15px;
 margin-top: 15px;
`;

export const SubmitText = styled.Text`
padding: 10px;
text-align: center;
font-size: 18px;
color: #fff
`;

export const Link = styled.TouchableOpacity`

`;

export const LinkText = styled.Text`

`;