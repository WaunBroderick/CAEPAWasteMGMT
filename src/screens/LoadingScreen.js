import React, {useContext, useEffect} from "react";
import { View, StyleSheet } from "react-native";

import styled from 'styled-components'
import LottieView from 'lottie-react-native'

import Text from '../components/Text'

import {UserContext} from '../context/UserContext'

export default LoadingScreen = () => {
    const [_, setUser] = useContext(UserContext)
    useEffect (() =>{
        setTimeout(async () => {
            setUser((state) => ({ ...state, isLoggedIn: false}));
        }, 1500)
    }, [])
    return (
       <Container>
           <Text title color="#FFFFFF">CAEPA App</Text>
        
            <LottieView 
            source={require("../../assets/animations/loading.json")}
            autoPlay
            loop
            style={{ width: "100%"}}
            />
       </Container>
    )
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #222222;
`
