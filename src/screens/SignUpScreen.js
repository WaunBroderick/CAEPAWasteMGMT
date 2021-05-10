import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";

import styled from "styled-components"

// Custom components
import Text from "../components/Text"


export default SignUpScreen = ({navigation}) => {
    const [ username, setUsername ] = useState();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ loading, setLoading ] = useState(false);

    return (
        <Container>
            <Main>
                <Text title semi center>
                    Sign up to get started 
                </Text>
            </Main>

            <Auth>

                <AuthContainer>
                    <AuthTitle>Username</AuthTitle>
                    <AuthField 
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    autoFocus={true} 
                    onChangeText={username => setEmail(username.trim())}
                    value={username}
                    />
                </AuthContainer>

                <AuthContainer>
                    <AuthTitle>Email Address</AuthTitle>
                    <AuthField 
                    autoCapitalize="none" 
                    autoCompleteType="email" 
                    autoCorrect={false} 
                    autoFocus={true} 
                    keyboardType="email-address"
                    onChangeText={email => setEmail(email.trim())}
                    value={email}
                    />
                </AuthContainer>

                <AuthContainer>
                    <AuthTitle>Password</AuthTitle>
                    <AuthField 
                    autoCapitalize="none" 
                    autoCompleteType="password" 
                    autoCorrect={false} 
                    secureTextEntry={true} 
                    onChangeText={password => setPassword(password.trim())}
                    value={password}
                    />
                </AuthContainer>

            </Auth>

            <SignUpContainer disable={loading}>
                {loading ? (
                    <Loading />
                ) : (
                                        <Text bold center color="#FFFFFF">
                        Sign Up
                    </Text>
                )}

            </SignUpContainer>

            <SignUp onPress={() => navigation.navigate("SignIn")}>
                <Text small center>
                    Already have an account?{" "}
                    <Text bold color="#8022D9">
                        Sign In.
                    </Text>
                </Text>
            </SignUp>

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

const Auth = styled.View`
    margin: 64px 32px 32px;
`;

const AuthContainer = styled.View`
    margin-bottom: 32px;
`;

const AuthTitle = styled(Text)`
    color: #8E93A1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`;

const AuthField = styled.TextInput`
    border-bottom-color: #8E93A1;
    border-bottom-width: 0.5px;
    height: 48px;
`;

const SignUpContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #8022D9;
    border-radius: 6px;
`;

const Loading = styled.ActivityIndicator.attrs(props => ({
    color: "#FFFFFF",
    size: "small",
}))``;

const SignUp = styled.TouchableOpacity`
    margin-top: 16px;
`;

