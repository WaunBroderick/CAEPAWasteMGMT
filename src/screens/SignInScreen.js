import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";

import styled from "styled-components"

// Custom components
import Text from "../components/Text"


export default SignInScreen = () => {
    return (
        <Container>
            <Main>
                <Text title semi center>
                    Welcome back, 
                </Text>
            </Main>
        </Container>
    );
};

const Container = styled.View`
    flex: 1;
`;

const Main = styled.View`
    flex: 1;
    margin-top: 192px;
`;