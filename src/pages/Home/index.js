import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/auth';
import HeaderHome from '../../components/HeaderHome/headerHome';
import { Background } from './styles';


export default function Home(){

    return(
       <Background>
          <HeaderHome title="Minhas movimentações"/>
       </Background>
    );
}