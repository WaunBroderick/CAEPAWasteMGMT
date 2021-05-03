import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Theme & Styling
import { TextInput, DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
    },
  };
  

export default class LoginScreen extends React.Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    };
    
    render() {
        return(
            <PaperProvider theme={theme}>
                <View style={styles.container}>
                    <Text>Login Screen</Text>

                </View>
            </PaperProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});