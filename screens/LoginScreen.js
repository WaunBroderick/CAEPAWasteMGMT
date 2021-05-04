import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Theme & Styling
import { TextInput, DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

// Auth
import * as firebase from 'firebase'

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
        phoneNumber: "",
        errorMessage: null
    };
    
    render() {
        return(
            <PaperProvider theme={theme}>
                <View style={styles.container}>
                    
                    <Text style={styles.greeting}>{`Hello Again.\n Welcome back.`}</Text>
                    

                <View style={styles.errorMessage}>
                    <Text>Error</Text>
                </View>

                <View style={styles.form}>
                    <View>
                        <Text>Email Address</Text>
                            <TextInput 
                            style={styles.input} 
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                            ></TextInput>
                    </View>

                    <View>
                        <Text>Password</Text>
                        <TextInput 
                        style={styles.input} 
                        autoCapitalize="none"
                        secureTextEntry
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        ></TextInput>
                    
                    </View>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: "#FFF", fontWeight: "500"}}> Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}
                onPress={() => this.props.navigation.navigate("Register")}>
                   <Text style={{ color: "#414959", fontSize: 13}}>
                       New to App? <Text style={{ fontWeight: "500", color: "#E9445A"}}>Sign Up</Text>
                   </Text> 
                </TouchableOpacity>


                </View>
            </PaperProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error:{
        color: "#E9446A"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: 1,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});